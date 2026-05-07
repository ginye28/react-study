import { useEffect, useRef, useState } from "react";
import { REGEX } from "../constants/regex";

export function useInput(initValue) {
    const [ inputValues, setInputValues ] = useStatetate(initValue);
    const [ isValid, setValid ] = useState(false);
       
    
      useEffect(() => {
        const entries = Object.entries(inputValues);
        const validList = entries.filter(([key, value]) => {
          const regex = REGEXX[key];
          if (!regex) return true;
          return regex.test(value);
        })
    
        setValid(validList.length === entries.length);
    
      }, [inputValues]);
    
      const handleInputOnChange = (e) => {
        const { name, value } = e.target;
    
        setInputValues({
          ...inputValues,
          [name]: value,
        })
    }

    return {
        inputValues,
        setInputValues,
        isValid,
        handleInputOnChange,
    }
}