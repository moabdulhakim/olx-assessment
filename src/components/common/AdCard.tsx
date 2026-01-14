import styles from "@/styles/components/common/AdCard.module.css";
import { getIconPath } from "@/utils/utils";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const AdCard = ({ ad }: { ad: any }) => {
    const {t, isAr} = useTranslation();

  return (
    <Link href={`/ad/${ad.ad_id}`} className={styles["ad-card"]}>
      <div className={`${styles.image}`}>
        <Image src={ad.ad_image_url} alt={ad.ad_title} fill objectFit="cover" />
      </div>
      <div className={`${styles.details}`}>
        <div className={`${styles.price}`}>{t.common.usd} {ad.ad_price}</div>
        <div className={`${styles.title}`}>
          <p>{ad.ad_title}</p>
        </div>
        <div className={styles.subtitle}>
            {
                ad.ad_bedroom_count && (
                    <div className={`${styles.label}`}>
                        <Image src={getIconPath("bedroom.svg")} alt="bedroom" width={16} height={16} />
                        <p>{ad.ad_bedroom_count}</p>
                    </div>
                )
            }
            {
                ad.ad_bathroom_count && (
                    <div className={`${styles.label}`}>
                        <Image src={getIconPath("bathroom.svg")} alt="bedroom" width={16} height={16} />
                        <p>{ad.ad_bathroom_count}</p>
                    </div>
                )
            }
            {
                ad.ad_area && (
                    <div className={`${styles.label}`}>
                        <Image src={getIconPath("area.svg")} alt="area" width={16} height={16} />
                        <p>{ad.ad_area} {t.common.sqm}</p>
                    </div>
                )
            }
            
        </div>
        <div className={`${styles.desc}`}>
            <div className={`${styles.location}`}>{isAr? ad.ad_location_name_lc : ad.ad_location_name_en}</div>
        </div>
      </div>
    </Link>
  );
};

export default AdCard;
