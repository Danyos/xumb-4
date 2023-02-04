import Stack from '@mui/material/Stack';
import Status from "./Input/Status";
import Price from "./Input/Price";
import CheckboxFiled from "./Input/Category";
function FilterIndex() {
    return (
        <>
            <Stack direction="column" spacing={2}>
              <Status />
                <Price />
               <CheckboxFiled />
            </Stack>
        </>
    )
}
export default FilterIndex;
