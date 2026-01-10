import Image from 'next/image';
import styles from "@/styles/components/ui/Button.module.css";

interface ButtonProps {
    icon?: string;
    content?: string;
    primary?: boolean;
    secondary?: boolean;
    linkLike?: boolean;
    iconSize?: number;
}

const Button = ({icon, content, primary, secondary, linkLike, iconSize = 16}: ButtonProps) => {

  return (
    <button className={`${styles.button} ${primary && styles.primary} ${secondary && styles.secondary} ${linkLike && styles["link-like"]}`}>
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