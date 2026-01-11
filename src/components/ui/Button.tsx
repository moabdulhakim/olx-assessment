import Image from 'next/image';
import styles from "@/styles/components/ui/Button.module.css";

interface ButtonProps {
    icon?: string;
    content?: string;
    variant: "primary" | "secondary" | "link-like";
    iconSize?: number;
}

const Button = ({icon, content, variant, iconSize = 16}: ButtonProps) => {

  return (
    <button className={`${styles.button} ${styles[variant]}`}>
        {
            icon && <Image src={`/assets/icons/${icon}`} alt={icon} width={iconSize} height={iconSize} />
        }
        {
          content &&
          <span className={styles.content}>
              {content}
          </span>
        }
    </button>
  )
}

export default Button