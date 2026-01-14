import Modal from "../ui/Modal";
import { useTranslation } from "@/hooks/useTranslation";
import useForm from "@/hooks/useForm";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styles from "@/styles/components/common/LoginModal.module.css";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [success, setSuccess] = useState(false);

  const { t } = useTranslation();
  const {login} = useAuthStore();

  const onSubmit = (vals: any) => {
    login(vals);
    setSuccess(true);
    setTimeout(()=>{
        onClose();
    }, 1000)
  };

  const validate = (vals: any) => {
    const errors:any = {};
    if (!vals.username) {
      errors.username = t.validation.auth.username_required;
    }
    else if(vals.username.length < 3){
        errors.username = t.validation.auth.username_min_length;
    }
    else if(/[^a-zA-Z0-9]/.test(vals.username)) {
      errors.username = t.validation.auth.username_invalid;
    }

    if (!vals.password) {
      errors.password = t.validation.auth.password_required;
    }
    else if (vals.password.length < 6) {
      errors.password = t.validation.auth.password_min_length;
    }

    return errors;
  }

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validate,
  });


  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t.auth.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          id="username"
          label={t.auth.username}
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          id="password"
          label={t.auth.password}
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Button variant="primary" fullWidth style={{marginTop: "1rem"}} disabled={isSubmitting || success} type="submit">
            {success ? t.common.success : t.auth.login}
        </Button>
      </form>
    </Modal>
  );
};

export default LoginModal;
