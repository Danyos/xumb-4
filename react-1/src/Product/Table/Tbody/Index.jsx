import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {info_product} from "../../../obj";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from '@mui/icons-material/Clear';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
function createData(name, calories, fat, carbs, protein,images) {
    return { name, calories, fat, carbs, protein,images };
}
const rows = [];
info_product.map(res=>rows.push(createData(res.name, res.brand, res.status, res.price, res.category,res.images)))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function TbodyIndex() {

return (
<>
    <TableBody>
        {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right"><img src={row.images} style={{width:"100px"}} alt=""/></StyledTableCell>
                <StyledTableCell align="right"><ClearIcon /></StyledTableCell>
            </StyledTableRow>
        ))}
    </TableBody>
</>
)
}
export default TbodyIndex;
