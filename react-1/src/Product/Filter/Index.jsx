import Stack from '@mui/material/Stack';
import Status from "./Input/Status";
import Price from "./Input/Price";
import CheckboxFiled from "./Input/Category";
import {useEffect, useState} from "react";
function FilterIndex({callback}) {

    return (
        <>
            <Stack direction="column" spacing={2}>
              <Status />
                <Price />
               <CheckboxFiled callback={(res)=>callback(res)}/>
            </Stack>
        </>
    )
}
export default FilterIndex;
