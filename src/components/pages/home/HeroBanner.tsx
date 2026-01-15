import Image from 'next/image'
import styles from '@/styles/pages/Home.module.css'
import { getImagePath } from '@/utils/utils'

const HeroBanner = () => {
  return (
    <div className={`${styles["hero-banner"]}`}>
        <Image src={getImagePath("slider-1.jpg")} alt="Slider-1" fill style={{objectFit: "cover"}}/>
    </div>
  )
}

export default HeroBanner