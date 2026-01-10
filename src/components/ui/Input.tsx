import Image from "next/image";
import styles from "@/styles/components/ui/Input.module.css"

interface InputProps {
    type: "number" | "text";
    placeholder: string;
    icon?: string;
}

const Input = ({type, placeholder, icon}: InputProps) => {
  return (
    <div className={styles["input-container"]}>
        {
            icon && <Image className={styles.img} src={`/assets/icons/${icon}`} alt={icon} width={20} height={20} />
        }
        <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input