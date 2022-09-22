import Google, { TGoogleProps } from "../../components/Google";
import PriceProgress, { TProgressProps } from "../../components/PriceProgress"

import { Box, Button, Container, Grid, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";

type TIncomeProps = {
    WageProgress: TProgressProps[],
    InvestmentProgress: TProgressProps[],
    GooglePaystub: TGoogleProps,
    GoogleStockPlan: TGoogleProps,
    TD: TGoogleProps
}
  
const Income:React.FC<TIncomeProps> = (props) => {

    return (
        <Grid container spacing={2} mb={15}>
            <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight="700" >Wage Income</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                props.WageProgress.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <PriceProgress {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...props.GooglePaystub} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={{
                                fontSize: "12px",
                                padding: "16px",
                                border: "1px dashed #BDBDBD",
                                width: '100%',
                                justifyContent: 'start',
                                color: '#828282',
                                textTransform: 'none'
                            }}>
                            <AddIcon sx={{ color: '#828282' }} />
                            <Typography>Add Wage Source</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight="700" >Investment Income</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                props.InvestmentProgress.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <PriceProgress {...item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...props.GoogleStockPlan} />
                    </Grid>
                    <Grid item xs={12}>
                        <Google {...props.TD} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Income