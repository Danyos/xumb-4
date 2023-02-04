import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";

export default function Price(){

    return(
        <>
            <Stack direction="row" spacing={2}>
             <TextField type={"number"} id="standard-basic" label="Min" variant="standard" />
             <TextField type={"number"} id="standard-basic2" label="Max" variant="standard" />

            </Stack>
        </>
    )
}