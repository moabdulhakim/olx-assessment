import React, { useEffect, useMemo, useRef, useState } from 'react'
import { getAllCategories } from '@/services/categoryService'
import { CategoryList } from '@/types/category'
import OlxLink from '../ui/OlxLink';
import styles from '@/styles/components/common/Navbar.module.css';
import Button from '../ui/Button';
import Image from 'next/image';
import { getIconPath } from '@/utils/utils';
import { useClickOutside } from '@/hooks/useClickOutside';

const navCategoriesIds = [51, 61, 70, 43, 739, 56, 19, 50];

const Navbar = () => {
    const [categories, setCategories] = useState<CategoryList>([]);

    const categoriesListRef = useRef(null);
    const {isOpen, setIsOpen} = useClickOutside(categoriesListRef);

    useEffect(()=>{
        getAllCategories().then((categories: CategoryList)=>{
            setCategories(categories);
        })
    }, [])

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
                    All Categories
                </span>
                <Image src={getIconPath("arrow.svg")} alt="arrow" width={18} height={18} style={{rotate: isOpen ? "180deg" : "0deg"}} />
            </Button>

            {isOpen && (
                <CategoriesListComponent categories={categories} />
            )}
        </div>
        {
            navCategories.map((category)=>{
                return (
                    <OlxLink key={category.id} href={`/${category.parentSlug}/${category.slug}`} content={category.name_l1} />
                )
            })
        }
    </div>
  )
}


const CategoriesListComponent = ({categories}: {categories: CategoryList}) =>{
    return (
        <div className={styles["categories-list"]}>
            {categories.map((category)=>{
                return (
                    <div className={styles.block}>
                        <OlxLink key={category.id} href={`/${category.slug}`} content={category.name_l1} variant='header' />
                        {category.children.map((child)=>{
                            return (
                                <OlxLink key={child.id} href={`/${category.slug}/${child.slug}`} content={child.name_l1} />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar