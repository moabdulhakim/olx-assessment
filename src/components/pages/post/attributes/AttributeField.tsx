import styles from "@/styles/pages/Attributes.module.css";

interface AttributeFieldProps {
  label: string;
  isRequired?: boolean;
  children: React.ReactNode;
}

const AttributeField = ({
  label,
  isRequired,
  children,
}: AttributeFieldProps) => {
  return (
    <div className={styles["attribute-field"]}>
      <div className={styles["attribute-field-label"]}>
        <p>{label}</p>
        {isRequired && <span className={styles.required}>*</span>}
      </div>

      <div className={styles["attribute-field-body"]}>
        {children}
      </div>
    </div>
  );
};

export default AttributeField;
