import { useRouter } from "next/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";

export const useTranslation = () => {
  let { locale } = useRouter();

  let t;
  switch (locale) {
    case "ar":
      t = ar;
      break;
    case "en":
      t = en;
      break;
    default:
      locale = "en";
      t = en;
  }

  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";

  return { t, dir, locale, isAr };
};
