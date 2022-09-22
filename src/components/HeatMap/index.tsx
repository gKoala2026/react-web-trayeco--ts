import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import {
  PriceLabel,
} from "../../style/styledComponents";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ProgressBar from "../commons/progressbar";


const HeatMap:React.FC<THeatMapProps> = (props) => {

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={8.5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12/100*props.data.status[1].value}>
                  <PriceLabel>Category 1</PriceLabel>
                </Grid>
                <Grid item >
                  <PriceLabel>Category 2</PriceLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container height='26px'>
                <ProgressBar {...props.data} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3.5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PriceLabel>Heatmap</PriceLabel>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0.6}>
                {props.heatMap.map((item, index)=>(
                <Grid item xs={3} key={index} >
                  <Grid container bgcolor={(item.value<=0 && '#219653') || ((item.value<10000 && '#F2994A') || 'red')} py="4px" className="align-items-center" justifyContent='center' spacing={0.3}>
                    {item.check===1 && 
                    <Grid item>
                      <Grid container>
                      <CheckCircleOutlineOutlinedIcon sx={{color:"#fff", fontSize:"12px"}} />
                      </Grid>
                    </Grid>
                    }
                    <Grid item>
                      <Grid container>
                        <Typography fontSize='0.75rem' fontWeight="bold" color="#fff">{item.title}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeatMap;

export type THeatMapProps ={
  heatMap: { check: number, title: string, value:number }[],
  data: {
    min: number,
    max: number,
    status: {
      pattern: number,
      value: number,
      // label: "Dim1",
    }[],
  },
}