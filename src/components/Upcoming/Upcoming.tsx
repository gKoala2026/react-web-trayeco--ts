import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { RedFlagIcon, GreenFlagIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
} from "../../style/styledComponents";


const Upcoming:React.FC<TUpcomingProps> = (props) => {

  return (
    <Container>
      <BoxPanel maxWidth='300px' sx={{border:'none', padding:0}}>
        <Grid container spacing='20px'>
          <Grid container item xs={12}>
            <TypoItem flexGrow='1' color='#333333 !important' variant="subtitle2">Upcoming Events</TypoItem>
          </Grid>
          <Grid container item xs={12}>
            <Stack spacing={2}>
              {props.data.map((item, index)=>(
                <Stack direction='row' className="align-items-center" spacing="12px" key={index}>
                  {(item.flag==='red' && <RedFlagIcon /> )|| <GreenFlagIcon />}
                  <Typography color='#333333' fontSize='1rem' >{item.title}</Typography>
                  <Typography color='#828282' fontSize='1rem' >{item.date}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

export default Upcoming;

export type TUpcomingProps = {
    data: {
        flag:string, 
        title: string, 
        date: string
    }[]
}

