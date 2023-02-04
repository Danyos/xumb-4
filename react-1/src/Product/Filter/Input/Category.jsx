import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function CheckboxFiled() {

    return (
        <>
            <FormControlLabel control={<Checkbox  />} label="Apple" />
            <FormControlLabel control={<Checkbox  />} label="Samsung" />
            <FormControlLabel control={<Checkbox  />} label="Nokia" />
        </>
    )
}
export default CheckboxFiled;
