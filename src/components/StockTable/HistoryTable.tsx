import { Grid, Link, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';

import { TypoItem } from "../../style/styledComponents"
import { getSumByKey } from "../commons/functions";

//styles
const useStyles = makeStyles({
    table: { marginLeft:'16px', '& th, & td': {color:'#828282', paddingTop:'4px !important', paddingBottom:'4px !important' }},
    tableHead: { "& td, & th": { padding:'0px 4px',},},
    tableBody: { "& td, & th": { border: 0, padding:'0px 4px'},},
    tableFoot: { "& td, & th": { border: 0, padding:'0px 4px', color:'#333333', fontSize:'14px'},},
});

const HistoryTable:React.FC<THistoryTable> = (props) => {

    const classes = useStyles();

    return (
    <Grid container spacing={2}>
        <Grid container item xs={12} alignItems="center">
            <TypoItem flexGrow={'1'} variant="subtitle2">{props.title}</TypoItem>
            <Link className="cursor" fontSize='1rem'>
            {props.link}
            </Link>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell>Sale Date</TableCell>
                            <TableCell align="right">Shares sold</TableCell>
                            <TableCell align="right">Proceeds</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableBody}>
                        {props.table.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">{row.saledate}</TableCell>
                                <TableCell align="right">{row.sharessold.toLocaleString('en-US')}</TableCell>
                                <TableCell align="right">{((row.proceeds<0 && '-')||'')+`$`+Math.abs(row.proceeds).toLocaleString('en-US')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className={classes.tableFoot}>
                        <TableRow>
                            <TableCell><Typography fontSize='0.875rem' color='#828282'><b>Total</b></Typography></TableCell>
                            <TableCell align='right'>
                                <Typography fontSize='0.875rem'>
                                    <b>{getSumByKey(props.table, 'sharessold').toLocaleString('en-US')}</b>
                                </Typography>
                            </TableCell>
                            <TableCell align='right'>
                                <Typography fontSize='0.875rem'>
                                    <b>${getSumByKey(props.table, 'proceeds').toLocaleString('en-US')}</b>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default HistoryTable

export type THistoryTable = {
    title: string,
    link: string,
    tableheader: string[],
    table: {
        saledate: string,
        sharessold: number,
        proceeds: number,
    }[]
};
