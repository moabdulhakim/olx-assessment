import Image from "next/image";
import styles from "@/styles/components/ui/Input.module.css";
import { useEffect, useRef, useState } from "react";

interface Option {
  label?: string;
  value: string;
}

interface InputProps {
  type: "number" | "text";
  placeholder: string;
  icon?: string;
  options?: Option[];
  handleSelect?: (option: Option) => void;
}

const Input = ({ type, placeholder, icon, options, handleSelect=()=>{console.log('clicked');} }: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options?.filter((option) => {
    return option.label?.toLowerCase().includes(searchTerm.toLowerCase()) || option.value.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.toLowerCase().includes(option.value.toLowerCase()) || (option.label && searchTerm.toLowerCase().includes(option.label.toLowerCase()));
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const handleClickOutside = (event: MouseEvent) =>{
        if(containerRef.current && !containerRef.current.contains(event.target as Node)){
            setIsOpen(false);
        }
    }

    const handleEscClick = (event: KeyboardEvent)=>{
        if(event.key == "Escape") {
            setIsOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscClick)
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscClick)
    }
  }, [])

  return (
    <div className={styles["input-container"]} ref={containerRef}>
      {icon && (
        <Image
          className={styles.img}
          src={`/assets/icons/${icon}`}
          alt={icon}
          width={20}
          height={20}
        />
      )}
      <input className={styles.input} type={type} placeholder={placeholder} onFocus={toggleDropdown} onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} />
      {isOpen && filteredOptions && (
        <ul className={styles.dropdown}>
          {filteredOptions.map((option, index) => {
            return (
              <li className={styles.option} key={index} onClick={()=>{
                toggleDropdown();
                handleSelect(option);
                setSearchTerm(option.label || option.value)
              }}>
                {option.label || option.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Input;
