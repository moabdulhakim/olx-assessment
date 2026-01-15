import React from "react";
import styles from "@/styles/components/ui/Input.module.css";
import Image from "next/image";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: string;
    error?: string;
}

const Input = ({label, icon, error, ...props}: InputProps) => {
  return (
    <div className={styles["input-container"]}>
        {label && <label className={styles.label} htmlFor={props.id}>{label}</label>}
        <div className={`${styles["input-wrapper"]} ${error && styles["input-error"]}`}>
            {icon && <Image className={styles.img} src={icon} alt={icon} width={20} height={20} />}
            <input className={`${styles.input}`} {...props} />
        </div>
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input