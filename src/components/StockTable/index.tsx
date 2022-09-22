import * as React from 'react';
import {
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Box,
 } from '@mui/material';
 import { makeStyles } from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import { getSumByKey } from '../commons/functions';

//styles
const useStyles = makeStyles({
    table: { marginLeft:'16px', '& th, & td': {color:'#828282', paddingTop:'4px !important', paddingBottom:'4px !important' }},
    tableBody: { "& td, & th": { border: 0},},
    tableRowGreen: {
        "& td, th": {
        color:'#219653 !important'
      }}
});


const StockTable:React.FC<TStockTableProps> = ( props ) => {

    const classes = useStyles();

    return (
        <Box width='100%' sx={{border:0}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Completed</TableCell>
                                    <TableCell align="right">Taskes done</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {props.table.map((row, index) => (
                                    <TableRow className={`${new Date(row.date).getTime() < new Date(new Date().toISOString().slice(0, 10)).getTime() && classes.tableRowGreen}`} key={index}>
                                        <TableCell component="th" scope="row">{row.id}</TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">
                                            {
                                            row.completed===1 && 
                                                <CheckIcon sx={{fontSize:'0.875rem'}}/> ||
                                                <ClearIcon sx={{fontSize:'0.875rem'}}/>
                                            }
                                        </TableCell>
                                        <TableCell align="right">{row.tasksDone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Grid item xs={12}>
                            <Grid container px={2}>
                                <Typography fontSize='0.875rem' flexGrow='1' ><b>Total</b></Typography>
                                <Typography fontSize='0.875rem' width='50%' align="right">
                                    <b>{getSumByKey(props.table, 'tasksDone').toLocaleString('en-US')}</b>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default StockTable;

export type TStockTableProps = {
    table: {
        id: string,
        date: string,
        completed: number,
        tasksDone: number,
    }[]
};