import { CategoryField } from '@/types/category'
import React from 'react'
import AttributeField from './AttributeField'
import Input from '@/components/ui/Input'
import SearchableSelect from '@/components/ui/SearchableSelect'
import { getIconPath } from '@/utils/utils'
import MultipleSelect from '@/components/ui/MultipleSelect'

interface DynamicFieldProps {
    attribute: CategoryField;
    isAr: boolean;
    name: string;
    value: any;
    onChange: (e: any) => void;
    error: string | undefined;
}

const DynamicField = ({attribute, isAr, name, value, onChange, error}: DynamicFieldProps) => {

    const attributeName = isAr? attribute.name:attribute.attribute.replace("_", " ");

    attribute.choices?.forEach((choice)=>{
        choice.label = isAr? choice.seoSlug.ar : choice.seoSlug.en;
        return true;
    })

    const handleSelect = (option: any)=>{
        onChange({target: {name: attribute.attribute, value: option.value}});
    }

    const handleGetMultiple = (options: string[])=>{
        onChange({target: {name: attribute.attribute, value: options}});
    }


    const RenderedEle = () =>{
        switch (attribute.filterType) {
            case "single_choice":
                return (
                    <SearchableSelect placeholder={attributeName} error={error} icon={getIconPath("search-black.svg")} options={attribute?.choices || []} value={value} onSelect={handleSelect} />
                )
            case "range":
                return (
                    <Input type='number' placeholder={attributeName} name={name} value={value} onChange={onChange} error={error} />
                )
            case "multiple_choice":
                return(
                    <MultipleSelect name={attributeName} options={attribute.choices || []} onSelect={handleGetMultiple} value={value} error={error} />
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