import { useRouter } from "next/router"
import { ar } from "../locales/ar"
import { en } from "../locales/en"

export const useTranslation = () =>{
    const {locale} = useRouter();

    let t;
    switch(locale){
        case "ar":
            t = ar;
            break;
        case "en":
            t = en;
            break;
        default:
            t = en;
    }

    const dir = locale === "ar" ? "rtl" : "ltr";

    return {t, dir, locale};
}