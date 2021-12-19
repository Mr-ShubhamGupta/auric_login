import React from 'react';
import TextField from '@mui/material/TextField';

const Input=props=>{
const {label,className,value,onChange,id}=props
    return(
        <>
        <TextField id={id} value={value} label={label} variant="outlined" className={className} onChange={onChange}/>
        </>
    )
}
export default Input