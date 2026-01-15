import Image from "next/image";
import styles from "@/styles/components/ui/SearchableInput.module.css";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Option {
  label?: string;
  value: string;
}

interface InputProps {
  placeholder: string;
  options: Option[];
  value?: string,
  icon?: string;
  error?: string;
  onSelect?: (option: Option) => void;
}

const handleSelectDefault = (option: Option) => {
  console.log(option.value, "is selected");
};

const SearchableSelect = ({
  placeholder,
  icon,
  options,
  error,
  value,
  onSelect = handleSelectDefault,
}: InputProps) => {
  const [searchTerm, setSearchTerm] = useState(value || "");

  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useClickOutside(containerRef);

  useEffect(()=>{
    if(!value) return;

    const optionExist = options.find(op=> op.label == value || op.value == value);
    if(optionExist){
      setSearchTerm(optionExist.label || optionExist.value);
    }else{
      setSearchTerm("");
    }
  }, [value, options])

  const filteredOptions = options?.filter((option) => {
    const search = searchTerm.toLowerCase();
    const label = (option.label || "").toLowerCase();
    const value = option.value.toLowerCase();

    return (
      label.includes(search) ||
      value.includes(search) ||
      search.includes(value) ||
      (option.label && label.includes(search))
    );
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputBlur = () =>{
    const optionExist = options.find(op=> op.label == searchTerm || op.value == searchTerm);
    if(optionExist){
      setSearchTerm(optionExist.label || optionExist.value);
    }else{
      setSearchTerm("");
    }
    onSelect(optionExist || {label: "", value: ""});
  }

  return (
    <div className={`${styles["input-container"]} ${error && styles["input-error"]}`} ref={containerRef}>
      {icon && (
        <Image
          className={styles.img}
          src={icon}
          alt={icon}
          width={20}
          height={20}
        />
      )}
      <input
        className={styles.input}
        type={"text"}
        placeholder={placeholder}
        onFocus={toggleDropdown}
        onBlur={handleInputBlur}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      {isOpen && filteredOptions && (
        <ul className={styles.dropdown}>
          {filteredOptions.map((option, index) => {
            return (
              <li
                className={styles.option}
                key={index}
                onMouseDown={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                  setSearchTerm(option.label || option.value);
                  onSelect(option);
                }}
              >
                {option.label || option.value}
              </li>
            );
          })}
        </ul>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default SearchableSelect;
