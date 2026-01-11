import styles from '@/styles/components/common/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import OlxLink from '../ui/OlxLink'
import { useTranslation } from '@/hooks/useTranslation'
import Input from '../ui/Input'
import { lebanonGovernorates } from '../../../public/dummyData'
import { getIconPath } from '@/utils/utils'

const Header = () => {
    const {t, locale} = useTranslation();

    const otherLocale = locale === "ar" ? "en" : "ar";
    const lang = locale === "ar" ? "English" : "العربية";

    const toggleLang =()=>{
        document.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=31536000`;
    }

  return (
    <header className={styles.header}>
        <div className={styles["logo-container"]}>
            <Link href="/">
                <Image src="/assets/logo.svg" alt="Logo" width={56} height={28} />
            </Link>
        </div>

        <div className={styles["utilities-container"]}>

            <div className={styles.right}>
                <Input icon='location-pin.svg' placeholder='Location' type='text' options={lebanonGovernorates} />
            </div>

            <div className={styles.center}>
                <Input placeholder="Find Cars, Mobile Phones and More..." type='text' />
                <button>
                    <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
                </button>
            </div>

            <div className={styles.left}>
                <OlxLink locale={otherLocale} content={lang} variant='header' onClick={toggleLang} />
                <Button variant="link-like">Login</Button>
                <Button variant="primary">
                    <Image src={getIconPath("iconSell.svg")} alt="arrow" width={18} height={18}/>
                    Sell
                </Button> 
            </div>
        </div>
    </header>
  )
}

export default Header