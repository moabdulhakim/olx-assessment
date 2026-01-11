import Image from 'next/image'
import styles from '@/styles/pages/Home.module.css'

const HeroBanner = () => {
  return (
    <div className={`${styles["hero-banner"]}`}>
        <Image src="/assets/images/slider-1.jpg" alt="Slider-1" fill style={{objectFit: "cover"}}/>
    </div>
  )
}

export default HeroBanner