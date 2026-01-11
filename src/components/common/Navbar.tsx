import React, { useEffect, useMemo, useRef, useState } from 'react'
import { getAllCategories } from '@/services/categoryService'
import { CategoryList } from '@/types/category'
import OlxLink from '../ui/OlxLink';
import styles from '@/styles/components/common/Navbar.module.css';
import Button from '../ui/Button';
import Image from 'next/image';
import { getIconPath } from '@/utils/utils';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useTranslation } from '@/hooks/useTranslation';

const navCategoriesIds = [51, 61, 70, 43, 739, 56, 19, 50];

const Navbar = ({categories}: {categories: CategoryList}) => {
    const {t, locale} = useTranslation();

    const categoriesListRef = useRef(null);
    const {isOpen, setIsOpen} = useClickOutside(categoriesListRef);


    const navCategories = useMemo(()=>{
        const result: CategoryList = [];

        const findSelectedCategories = (list: CategoryList, parentSlug?: string) =>{
            list.forEach((category)=>{
                if(navCategoriesIds.includes(category.id)){
                    if(parentSlug){
                        category.parentSlug = parentSlug;
                    }
                    result.push(category);
                }
                if(category.children){
                    findSelectedCategories(category.children, category.slug);
                }
            })
        } 
    
        findSelectedCategories(categories);
        return result;
    }, [categories])

  return (
    <div className={styles.navbar}>
        <div ref={categoriesListRef}>
            <Button variant="link-like" customStyles={styles["all-categories-btn"]} onClick={()=>setIsOpen(!isOpen)}>
                <span>
                    {t.home.categories}
                </span>
                <Image src={getIconPath("arrow.svg")} alt="arrow" width={18} height={18} style={{rotate: isOpen ? "180deg" : "0deg"}} />
            </Button>

            {isOpen && (
                <CategoriesListComponent categories={categories} locale={locale} />
            )}
        </div>
        {
            navCategories.map((category)=>{
                return (
                    <OlxLink key={category.id} href={`/${category.parentSlug}/${category.slug}`} content={locale == "ar"?  category.name_l1:category.name} />
                )
            })
        }
    </div>
  )
}


const CategoriesListComponent = ({categories, locale}: {categories: CategoryList, locale: string}) =>{
    return (
        <div className={styles["categories-list"]}>
            {categories.map((category)=>{
                return (
                    <div className={styles.block} key={category.id}>
                        <OlxLink key={category.id} href={`/${category.slug}`} content={locale == "ar"?  category.name_l1:category.name} variant='header' />
                        {category.children.map((child)=>{
                            return (
                                <OlxLink key={child.id} href={`/${category.slug}/${child.slug}`} content={locale == "ar"?  child.name_l1:child.name} />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar