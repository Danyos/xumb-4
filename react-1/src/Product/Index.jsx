import FilterIndex from "./Filter/Index";
import TableIndex from "./Table/Index";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container, CssBaseline} from "@mui/material";
import {useEffect, useState} from "react";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function ProductIndex() {
    const [mycategory,setmycategory]=useState()
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid item md={3} sm={12}>
                            <Item><FilterIndex callback={(res)=>setmycategory(res)}/></Item>
                        </Grid>
                        <Grid item md={9} sm={12}>
                            <Item> <TableIndex categoryData={mycategory} /></Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </>
    )
}
export default ProductIndex;
