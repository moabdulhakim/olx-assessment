import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/pages/Post.module.css'
import { useRouter } from 'next/router';
import { getIconPath } from '@/utils/utils';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const router = useRouter();
  const {isAr} = useTranslation();

  const handleBack = () =>{
    router.back();
  }

  return (
    <header className={`${styles.header}`}>
        <Button onClick={handleBack} variant="icon">
          <Image src={getIconPath("back.svg")} style={{transform: isAr? "rotate(180deg)" : ""}} alt="Back" width={24} height={24} />
        </Button>
        <Link href="/">
            <Image src="/assets/logo.svg" style={{marginBottom: "-0.7rem"}} alt="Logo" width={56} height={28} />
        </Link>
    </header>
  )
}

export default Header