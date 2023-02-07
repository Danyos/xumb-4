import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";
function CheckboxFiled({callback}) {
    const [cat,setcat]=useState([])

function category(a){

    if(cat.includes(a)){
        setcat(cat.filter(res=>res!==a))
    }else{
      setcat([...cat,a])
    }

}
useEffect(()=>{
    callback(cat)
},[cat])
    return (
        <>
            <ul>
                {
                    cat.map((res,i)=>(
                        <li key={i}>{res}</li>
                    ))
                }
            </ul>
            <FormControlLabel control={<Checkbox  />} label="Apple" onChange={()=>category('Apple')} />
            <FormControlLabel control={<Checkbox  />} label="Samsung" onChange={()=>category('Samsung')}/>
            <FormControlLabel control={<Checkbox  />} label="Huawei" onChange={()=>category('Huawei')}/>
        </>
    )
}
export default CheckboxFiled;
