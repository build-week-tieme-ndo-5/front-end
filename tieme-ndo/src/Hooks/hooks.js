import React, {useState} from 'react';

export const useFormInput = function useFormInput({initialValue, placeholder}){
    const [value, setValue] = useState(initialValue);
    
    function handleChange(e){
        setValue(e.target.value)
    }
    return {
        value, 
        placeholder: placeholder, 
        onChange: handleChange,
    }
}