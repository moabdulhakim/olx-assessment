import Link from 'next/link'
import styles from '@/styles/components/ui/OlxLink.module.css'
import { useRouter } from 'next/router';

interface OlxLinkProps {
    href?: string;
    content: string;
    variant?: "header" | "footer";
    locale?: string;
    onClick?: any;
}

const OlxLink = ({href, content, variant, locale, onClick: handleClick}: OlxLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href || router.asPath} locale={locale} className={`${styles["olx-link"]} ${variant && styles[variant]}`} onClick={handleClick}>
        {content}
    </Link>
  )
}

export default OlxLink