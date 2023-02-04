import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
function TheadIndex() {

return (
<>
    <TableHead>
        <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Status&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">price&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">category&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Images</StyledTableCell>
            <StyledTableCell align="right">Config</StyledTableCell>
        </TableRow>
    </TableHead>
</>
)
}
export default TheadIndex;
