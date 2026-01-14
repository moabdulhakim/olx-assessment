import { useState } from "react";

interface UseFormProps<T>{
    initialValues: T,
    onSubmit: (values: T) => void;
    validate?: (values: T) => Partial<Record<keyof T, string>>;
}


const useForm = <T extends Record<string, any>>({initialValues, onSubmit, validate}: UseFormProps<T>) => {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});

        if(errors[name as keyof T]){
            setErrors({...errors, [name]: null});
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        if(validate){
            const validationErrors = validate(values);
            if(Object.keys(validationErrors).length > 0){
                setErrors(validationErrors);
                setIsSubmitting(false);
                return;
            }
        }

        // to simulate loading
        setTimeout(()=>{
            onSubmit(values);
            setIsSubmitting(false);
        }, 1000)
    }

    const resetForm = () => setValues(initialValues);

    return {
        values,
        errors,
        isSubmitting,

        handleChange,
        handleSubmit,
        resetForm,
        setValues
    }
}

export default useForm;