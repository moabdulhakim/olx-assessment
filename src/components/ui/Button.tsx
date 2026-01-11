import styles from "@/styles/components/ui/Button.module.css";

interface ButtonProps {
    variant: "primary" | "secondary" | "link-like";
    customStyles?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({variant, customStyles, children, onClick: handleClick}: ButtonProps) => {

  return (
    <button className={`${styles.button} ${styles[variant]} ${customStyles}`} onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button