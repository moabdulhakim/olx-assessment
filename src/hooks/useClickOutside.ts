import { useEffect, useState } from "react";

export const useClickOutside = (containerRef: React.RefObject<HTMLElement | null>) =>{
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(()=>{    

        if(!isOpen) return;
    
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
    }, [isOpen, containerRef])

    return {isOpen, setIsOpen}
}