import Link from 'next/link'
import styles from '@/styles/components/ui/OlxLink.module.css'

interface OlxLinkProps {
    href: string;
    content: string;
    header?: boolean;
    footer?: boolean;
}

const OlxLink = ({href, content, header, footer}: OlxLinkProps) => {
  return (
    <Link href={href} className={`${styles["olx-link"]} ${header ? styles.header : ""} ${footer ? styles.footer : ""}`}>
        {content}
    </Link>
  )
}

export default OlxLink