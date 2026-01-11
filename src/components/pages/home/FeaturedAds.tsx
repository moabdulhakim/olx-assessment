import AdCardSkeleton from '@/components/common/AdCardSkeleton';
import { getFeaturedAds } from '@/services/adsService';
import { useEffect, useState } from 'react'
import styles from '@/styles/components/common/AdCard.module.css'
import { groupAdsByCategory } from '@/utils/utils';
import AdCard from '@/components/common/AdCard';
import { useTranslation } from '@/hooks/useTranslation';

const FeaturedAds = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [featuredAds, setFeaturedAds] = useState<any[]>([]);
    const {t, locale} = useTranslation();

    useEffect(()=>{
        const fetchFeaturedAds = async () => {
            try{
                const retrievedFeaturedAds = await getFeaturedAds();
                const groupedAds = groupAdsByCategory(retrievedFeaturedAds, locale);
                setFeaturedAds(groupedAds);
            }catch(error){
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchFeaturedAds();
    },[])

    if(isLoading){
        return (
            <div className={styles["cards-container"]}>
                {
                    Array.from({length: 12}, (_, index) => (
                        <AdCardSkeleton key={index} />
                    ))
                }
            </div>
        )
    }
    
  return (
    <div>
        {
            Object.entries(featuredAds).map(([category, ads]) => (
                <section key={category} className={styles["cards-section"]}>
                    <h2>{category}</h2>
                    <div className={styles["cards-container"]}>
                        {
                            ads.map((ad: any) => (
                                <AdCard key={ad.ad_external_id} ad={ad} />
                            ))
                        }
                    </div>
                </section>
            ))
        }
    </div>
  )
}

export default FeaturedAds