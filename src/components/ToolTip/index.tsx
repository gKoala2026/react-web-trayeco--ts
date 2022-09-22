import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
} from "@mui/material";
import {
  GrayBoxPanel,
} from "../../style/styledComponents";

import { getSumByKey } from "../commons/functions";

//styles
const useStyles = makeStyles({
  marker: {
    position:'absolute', 
    width:'22.4px', 
    height:'22.4px', 
    backgroundColor:'#E0E0E0', 
    top:"0px", 
    left:"50%", 
    transform:'translate(-50%, -50%) rotate(-45deg)'
  },
});

const ToolTip:React.FC<TToolTipProps> = (props) => {
  
  const classes = useStyles();

  return (
    <GrayBoxPanel maxWidth='180px' position='relative' color='#000000 !important' p='12px'>
      {/* <div className={classes.marker}></div> */}
      <Grid container spacing='4px'>
        {props.data.map((item, index)=>(
          <Grid item xs={12} key={index}>
            <Grid container>
              <Grid item xs={6}>
                <Typography fontSize='0.75rem'>{item.item}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize='0.75rem' textAlign='right'>{item.value.toLocaleString('en-US')}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography fontWeight='bold' fontSize='0.75rem'>Total</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight='bold' fontSize='0.75rem' textAlign='right'>{getSumByKey(props.data, 'value').toLocaleString('en-US')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GrayBoxPanel>
  );
};

export default ToolTip;

export type TToolTipProps = {
  data: { item: string, value: number }[],
}
