import styles from "@/styles/components/ui/Button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "link-like";
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button = ({variant, fullWidth, children, className: customClassName, disabled,...props}: ButtonProps) => {

  const combinedClassName = `
    ${styles.button}
    ${variant? styles[variant] : ""}
    ${disabled? styles.disabled : ""}
    ${fullWidth ? styles.fullWidth : ""}
    ${customClassName || ""}
  `.trim();

  return (
    <button disabled={disabled} className={combinedClassName} {...props}>
        {children}
    </button>
  )
}

export default Button