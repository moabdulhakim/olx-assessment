import styles from "@/styles/components/ui/MultipleSelect.module.css"
import { CategoryFieldChoice } from "@/types/category";
import { useState } from "react";


interface MultipleSelectProps {
    options: CategoryFieldChoice[];
    name: string;
}

const MultipleSelect = ({options}: MultipleSelectProps) => {
    const [selectedVals, setSelectedVals] = useState<string[]>([]);

    const handleSelect = (val :string)=>{

        if(selectedVals.includes(val)){
            setSelectedVals(selectedVals.filter((sVal)=> sVal !== val));
        }else{
            setSelectedVals([...selectedVals, val])
        }
    }

  return (
    <div className={styles["multiple-select"]}>
        {
            options.map((option)=>(
                <button onClick={()=> handleSelect(option.value)} className={`${styles["option"]} ${selectedVals.includes(option.value)? styles["selected"]:""}`} id={String(option.id)} value={option.value}>
                    {option.label}
                </button>
            ))
        }
    </div>
  )
}

export default MultipleSelect