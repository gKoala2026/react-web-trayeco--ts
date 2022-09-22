import * as React from "react";
import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material"
import Details from "../../../components/Details"
import { StyledTab, StyledTabs, TabPanel } from "../../../style/styledComponents"
import Category from "../../../components/Category";
import Summary from "../../../components/Summary";

import AddIcon from "@mui/icons-material/Add";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    minHeight: '90%',
    bgcolor: '#fff',
    // boxShadow: 24,
    outline:0,
};

const SummaryProps = {
    title:'Paystub Summary',
    link:'',
    table: [
        {
        category: "Total wage income",
        current: 12280.83,
        ytd: 347544.18,
        },
        {
        category: "Pre-tax deductions",
        current: -1016.96,
        ytd: -4067.84,
        },
        {
        category: "Post-tax dedutions",
        current: -1514.8,
        ytd: -148629.97,
        },
        {
        category: "Empoloyee tax deductions",
        current: -3209.39,
        ytd: -169737.59,
        },
    ],
};
    
const Paystub:React.FC<TPaystubProps> = React.forwardRef((props, ref) => {
    
    const [value, setValue] = React.useState(0);
    const handleTabChange = (event:any, newValue:number) => {
        setValue(newValue);
    };

    type TSelect = {
        value: string|number,
        options: string[],
    }
    type TDetailsProps = {
        member: TSelect,
        company: TSelect,
        frequency: TSelect,
        type: TSelect,
    }
    const [DetailsProps, setDetailsProps] = React.useState<TDetailsProps>({
        member: {
            value: "Jenny Thompson",
            options: ["Jenny Thompson", "Benny Thompson"],
        },
        company: {
            value: "Google",
            options: ["Google"],
        },
        frequency: {
            value: "Twice a month",
            options: ["Twice a month"],
        },
        type: {
            value: "Regular",
            options: ["Regular"],
        },
    });
    const DetailsHandleChange = (e: {target:{name:any, value:string}}) =>{
        const temp:TDetailsProps = DetailsProps;
        const field:keyof TDetailsProps = e.target.name;
        temp[field].value = e.target.value;
        setDetailsProps({ ...temp });
    }
    
    type TCategoryProps = {
        category: TSelect,
        description: TSelect,
        recurring: TSelect,
        currentAmount: TSelect,
        YTDAmount: TSelect,
    }
    const [CategoryProps, setCategoryProps] = React.useState<TCategoryProps>({
        category: {
            value: "Type 1",
            options: ["Type 1", "Type 2", "Type 3"],
        },
        description: { value: "Desciption", options:['']},
        recurring: {
            value: "Recurring",
            options: ["Recurring"],
        },
        currentAmount: { value: 33.65, options:[''] },
        YTDAmount: { value: 135.8, options:[''] },
    });
    const CategoryHandleChange = (e: {target:{name:any, value:string}}) =>{
        const temp:TCategoryProps = CategoryProps;
        const field:keyof TCategoryProps = e.target.name;
        temp[field].value = e.target.value;
        setCategoryProps({ ...temp });
    }

    return (
        <Box sx={style}>
            <Grid item xs={12} sx={{width:'100%'}}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={0}
                    height="90vh"
                >
                    <Box width='70%' height={'100% !important'}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Details title="Paystub" handleChange={DetailsHandleChange} {...DetailsProps} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Container>
                                    <StyledTabs
                                    onChange={handleTabChange}
                                    value={value}
                                    >
                                    <StyledTab label="Income" />
                                    <StyledTab label="Equity" />
                                    <StyledTab label="Taxes"/>
                                    </StyledTabs>
                                    <Divider sx={{my:'20px'}} />
                                    <TabPanel value={value} index={0}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Category handleChange={CategoryHandleChange} {...CategoryProps} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    sx={{
                                                        fontSize: "12px",
                                                        padding: "8px",
                                                        border: "1px dashed #BDBDBD",
                                                        justifyContent: 'start',
                                                        color: '#828282',
                                                        textTransform: 'none'
                                                    }}>
                                                    <AddIcon sx={{ color: '#828282' }} />
                                                    <Typography>Add Item</Typography>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Typography>assdfdf</Typography>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <Typography>as23df</Typography>
                                    </TabPanel>
                                    </Container>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box width="30%" p={3}>
                        <Summary {...SummaryProps} />
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} sx={{position:'absolute', bottom:'0px', top:'auto', width:'100%', bgcolor:'white'}}>
              <Divider />
              <Container>
                <Grid container justifyContent='end' py={4}>
                  <Button onClick={props.modalClose}>
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className=''
                    // onClick={() => props.onSave()}
                  >
                    Save
                  </Button>
                </Grid>
              </Container>
            </Grid>
        </Box>
    )
})

export default Paystub

type TPaystubProps = {
    modalClose:()=>void
}