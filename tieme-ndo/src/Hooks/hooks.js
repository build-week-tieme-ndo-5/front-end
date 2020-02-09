import React, {useState} from 'react';

export const useFormInput = function useFormInput({initialValue, placeholder}){
    const [value, setValue] = useState(initialValue);
    
    function handleChange(e){
        console.log('from Custom Hook')
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return {
        value, 
        placeholder: placeholder, 
        onChange: handleChange,
    }
}