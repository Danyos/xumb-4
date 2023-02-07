import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {info_product} from "../../../obj";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from '@mui/icons-material/Clear';
import {useEffect, useState} from "react";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function TbodyIndex({categoryData}) {
    const [item,setItem]=useState(info_product)

    useEffect(()=>{
        if(categoryData){
            setItem(info_product.filter((n)=>!categoryData.length || categoryData.includes(n.brand)))

        }
    },[categoryData])
function deleted(id){
    setItem(item.filter(res=>res.id!== +id))
}
return (
<>
    <TableBody>
        {item.map((row) => (
            <StyledTableRow key={row.id}>
                <StyledTableCell align="right"> {row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right">{row.brand}</StyledTableCell>
                <StyledTableCell align="right"><img src={row.images} style={{width:"100px"}} alt=""/></StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right" ><ClearIcon onClick={()=>deleted(row.id)} /></StyledTableCell>

            </StyledTableRow>
        ))}
    </TableBody>
</>
)
}
export default TbodyIndex;
