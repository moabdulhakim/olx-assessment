import styles from "@/styles/components/ui/MultipleSelect.module.css"
import { CategoryFieldChoice } from "@/types/category";
import { useEffect, useState } from "react";


interface MultipleSelectProps {
    options: CategoryFieldChoice[];
    name: string;
    value:string[];
    onSelect: (options: string[]) => void;
    error?: string;
}

const MultipleSelect = ({options, onSelect,value, error}: MultipleSelectProps) => {
    const [selectedVals, setSelectedVals] = useState<string[]>(value || []);


    const handleSelect = (val :string)=>{
        let newVals: string[];
        if(selectedVals.includes(val)){
            newVals = (selectedVals.filter((sVal)=> sVal !== val));
        }else{
            newVals = ([...selectedVals, val])
        }

        onSelect(newVals);
    }

    useEffect(()=>{
        setSelectedVals(value);
    }, [value])


  return (
    <div className={styles["multiple-select"]}>
        {
            options.map((option)=>(
                <button onClick={()=> handleSelect(option.value)} className={`${styles["option"]} ${selectedVals.includes(option.value)? styles["selected"]:""}`} id={String(option.id)} value={option.value}>
                    {option.label}
                </button>
            ))
        }
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default MultipleSelect