import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/components/ui/Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles["content"]} onClick={(e)=>e.stopPropagation()}>
        <div className={styles["header"]}>
          <h3>{title}</h3>
          <button onClick={onClose} className={styles["close-btn"]}>
            <span>&times;</span>
          </button>
        </div>
        <div className={styles["body"]}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
