import styles from "@/styles/components/common/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import OlxLink from "../ui/OlxLink";
import { useTranslation } from "@/hooks/useTranslation";
import SearchableSelect from "../ui/SearchableSelect";
import { lebanonGovernorates, lebanonGovernorates_ar } from "../../../public/dummyData";
import { getIconPath } from "@/utils/utils";
import { useState } from "react";
import LoginModal from "./LoginModal";
import ProfileAvatar from "./ProfileAvatar";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const {isLoggedIn} = useAuthStore();
  const { t, locale } = useTranslation();
  const router = useRouter();

  const otherLocale = locale === "ar" ? "en" : "ar";
  const lang = locale === "ar" ? "English" : "العربية";

  const toggleLang = () => {
    document.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=31536000`;
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpened(!isLoginModalOpened);
  };

  const handleSellBtn = () =>{
    if(isLoggedIn){
        router.push("/post");
    }else{
        toggleLoginModal();
    }
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
          <SearchableSelect
            icon="location-pin.svg"
            placeholder={t.header.location}
            type="text"
            options={locale == "ar" ? lebanonGovernorates_ar : lebanonGovernorates}
          />
        </div>

        <div className={styles.center}>
          <SearchableSelect placeholder={t.header.search} type="text" />
          <button className={`${locale == "ar" && styles["ar-search"]}`}>
            <Image
              src={getIconPath("search.svg")}
              alt="search"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className={styles.left}>
          <OlxLink
            locale={otherLocale}
            content={lang}
            variant="header"
            onClick={toggleLang}
          />
          {
            isLoggedIn?
            <ProfileAvatar />
            :
            <Button variant="link-like" onClick={toggleLoginModal}>
                {t.auth.login}
            </Button>
          }
          <Button variant="primary" onClick={handleSellBtn}>
            <Image
              src={getIconPath("iconSell.svg")}
              alt="arrow"
              width={18}
              height={18}
            />
            {t.header.sell}
          </Button>
          {isLoginModalOpened && <LoginModal isOpen={isLoginModalOpened} onClose={toggleLoginModal} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
