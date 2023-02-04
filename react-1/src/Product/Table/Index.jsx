import TbodyIndex from "./Tbody/Index";
import TheadIndex from "./Thead/Index";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
function TableIndex() {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TheadIndex />
                    <TbodyIndex />
                </Table>
            </TableContainer>

        </>
    )
}
export default TableIndex;
