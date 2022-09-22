import * as React from "react";
import {
  Grid,
  Link,
  Typography,
  Stack,
  Divider,
  Modal,
} from "@mui/material";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
} from "../../style/styledComponents";
import ProgressBar, { TProgressBarProps } from "../commons/progressbar";
import { makeStyles } from "@mui/styles";
import EquityDetail from "../../pages/HouseHold/modal/EquityDetail";
import StockPlan from "../../pages/HouseHold/modal/StockPlan";

const useStyles = makeStyles({
  value: {
    fontSize: "12px !important",
    color: "#000",

  },
  title: {
    fontSize: "12px !important",
    fontWeight: "700 !important",
  },
  progressBack: {
    position: "relative",
    overflow: "hidden",
    display: "block",
    zIndex: "0",
    backgroundColor: "white",
    height: "20px",
    border: "2px solid #333",
  },
  status1: {
    background:
      "repeating-linear-gradient(45deg, #000000, #000000 1px, #ffffff 1px, #ffffff 8px)",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
  status2: {
    background: "#333",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
});

const Employer:React.FC<TEmployerProps> = ( props ) => {

  const classes = useStyles();

  const [detailOpen, setDetailOpen] = React.useState(false);
  const detailHandleOpen = () => setDetailOpen(true);
  const detailHandleClose = () => setDetailOpen(false);

  const [updateOpen, setUpdateOpen] = React.useState(false);
  const updateHandleOpen = () => setUpdateOpen(true);
  const updateHandleClose = () => setUpdateOpen(false);

  return (
    <BoxPanel sx={{p:'12px'}}>
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <TypoItem flexGrow='1' variant="subtitle2">{props.title}</TypoItem>
          {
            props.logo!=='' &&
            <img src={props.logo} alt="" />
          }
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {props.price.map((list, index)=>(
              <Grid item xs={'auto'} md={4} key={index}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>{list.title}</PriceLabel>
                  </Grid>
                  <Grid container item xs={12}>
                    <PriceValue pr='5.5px' >${list.price.toLocaleString('en-US')}</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {props.progressBarGroup.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={3}>
                <Link color='#000'>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                </Link>
                <Typography className={classes.value}>
                  ${item.value.toLocaleString('en-US')}
                </Typography>
              </Grid>
              <Grid item xs={9} md={9}>
                <Grid container height='24px'>
                  <ProgressBar {...item.data} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
            <Stack direction='row'>
              <Stack direction='row' flexGrow='1'>
                <Stack direction='row' spacing='5px'>
                  <Typography fontSize='0.75rem' lineHeight="14.52px" color={props.updated>60 && "#EB5757" || "#828282"}>
                    Last updated {props.updated} days ago ·
                  </Typography>
                </Stack>
                <Link color='#828282' alignItems='center' sx={{cursor:'pointer'}}>
                  <Stack direction='row'>
                    <Link
                      sx={{
                        display:'flex',
                        cursor: "pointer",
                        textDecorationColor: props.updated>60 && "#2F80ED" || "#828282",
                        color: props.updated>60 && "#2F80ED" || "#828282"
                      }} 
                      onClick={updateHandleOpen}
                    >
                      <RefreshOutlinedIcon sx={{fontSize:'16px'}} />
                      <Typography fontSize='0.75rem' lineHeight="15px">
                        Update
                      </Typography>
                    </Link>
                  </Stack>
                </Link>
              </Stack>
              <Stack>
                <Link
                  sx={{
                    display:'flex',
                    cursor: "pointer",
                    textDecorationColor: props.updated>10 && "#2F80ED" || "#828282",
                    color: props.updated>10 && "#2F80ED" || "#828282"
                  }} 
                  onClick={detailHandleOpen}
                >
                  View Details
                </Link>
              </Stack>
            </Stack>
        </Grid>
      </Grid>
      <Modal
        open={detailOpen}
        onClose={detailHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EquityDetail modalClose={detailHandleClose} />
      </Modal>
      <Modal
        open={updateOpen}
        onClose={updateHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StockPlan modalClose={updateHandleClose} />
      </Modal>
    </BoxPanel>
  );
};

export default Employer;

export type TTotalPricePanel = {
  title: string,
  price: number
}

export type TProgressBarPanelProps = {
  title: string,
  value: number,
  data: TProgressBarProps,
}

export type TEmployerProps = {
  title: string,
  logo: string,
  price: TTotalPricePanel[],
  progressBarGroup: TProgressBarPanelProps[],
  updated: number
}
