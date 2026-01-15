import { CategoryField } from '@/types/category'
import React from 'react'
import AttributeField from './AttributeField'
import Input from '@/components/ui/Input'
import SearchableSelect from '@/components/ui/SearchableSelect'
import { getIconPath } from '@/utils/utils'
import MultipleSelect from '@/components/ui/MultipleSelect'

const DynamicField = ({attribute, isAr}: {attribute: CategoryField, isAr:boolean}) => {

    const attributeName = isAr? attribute.name:attribute.attribute.replace("_", " ");

    attribute.choices?.forEach((choice)=>{
        choice.label = isAr? choice.seoSlug.ar : choice.seoSlug.en;
        return true;
    })

    const RenderedEle = () =>{
        switch (attribute.filterType) {
            case "single_choice":
                return (
                    <SearchableSelect placeholder={attributeName} icon={getIconPath("search-black.svg")} options={attribute?.choices || []} />
                )
            case "range":
                return (
                    <Input type='number' placeholder={attributeName} />
                )
            case "multiple_choice":
                return(
                    <MultipleSelect name={attributeName} options={attribute.choices || []} />
                )
        }
    }

    

  return (
    <AttributeField label={attributeName} isRequired={attribute.isMandatory}>
        <RenderedEle />
    </AttributeField>
  )
}

export default DynamicField