import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Stack,
  Link,
  TableFooter,
 } from '@mui/material';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { BoxPanel, TypoItem } from '../../style/styledComponents';
import { Box } from '@mui/system';
import { getSumByKey } from '../commons/functions';

const TitleTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  "td, th": {
    padding:'8px 0px', 
    fontSize:'16px',
    border:0 
  },
  "thead th": {
    color:'#828282',
  },
  "tfoot td": {
    color:'#000',
    fontWeight:'700'
  },
}));

const Title:React.FC<TTitleProps> = ( props ) => {

    return (
        <BoxPanel p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <TypoItem variant="subtitle2">{props.title}</TypoItem>
                        <Stack direction='row' flexGrow='1' pt='5px'>
                            <Stack direction='row' spacing='5px'>
                                <Typography fontSize='0.75rem' lineHeight="14.52px" color="#828282">
                                Last updated {props.updated} days ago ·
                                </Typography>
                            </Stack>
                            <Stack direction='row' color='#828282' >
                                <Link color='#828282' className='cursor text-decoration-gray' display='flex' >
                                    <RefreshOutlinedIcon sx={{fontSize:"14px"}}/>
                                    <Typography fontSize='0.75rem' lineHeight="15px">
                                        Update
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <TitleTable>
                        <TableHead>
                            <TableRow >
                                {
                                    props.col.map((list, index)=>(
                                        <TableCell width='auto' key={index}>{list}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.breakdown.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{row.Type}</TableCell>
                                    <TableCell>${row.Column1.toLocaleString('en-US')}</TableCell>
                                    <TableCell>${row.Column2.toLocaleString('en-US')}</TableCell>
                                    <TableCell>{row.Column3}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell>
                                    <Box width='60%' pt='16px' borderTop={'1px solid #000'}>
                                        ${getSumByKey(props.breakdown, 'Column1').toLocaleString('en-US')}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box width='60%' pt='16px' borderTop={'1px solid #000'}>
                                        ${getSumByKey(props.breakdown, 'Column2').toLocaleString('en-US')}
                                    </Box>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>
                    </TitleTable>
                </Grid>
            </Grid>
        </BoxPanel>
    );
}

export default Title;

export type TTitleProps = {
    title: string,
    updated: number,
    col: string[],
    breakdown: {
        Type: string,
        Column1: number,
        Column2: number,
        Column3: string,
    }[]
  }