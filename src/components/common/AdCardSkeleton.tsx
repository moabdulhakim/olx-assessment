import styles from "@/styles/components/common/AdCard.module.css"

const AdCardSkeleton = () => {
  return (
    <div className={styles["ad-card"]}>
        <div className={`skeleton-item ${styles.image}`}></div>
        <div className={`${styles.details}`}>
          <div className={`skeleton-item ${styles.price}`}></div>
          <div className={`skeleton-item ${styles.title}`}></div>
          <div className={`skeleton-item ${styles.desc}`}></div>
        </div>
    </div>
  )
}

export default AdCardSkeleton