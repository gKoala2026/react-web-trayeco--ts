import * as React from "react";
import { Box, Button, Container, Divider, Grid, OutlinedInput, Stack, Typography } from "@mui/material"
import Details from "../../../components/Details"
import { PriceLabel, StockSelect, TypoItem } from "../../../style/styledComponents"

import AddPlan from "../../../components/AddPlan";
import BarChart from "../../../components/BarChart";
import StockTable from "../../../components/StockTable";
import { SelectIcon } from "../../../components/commons/icon/multipleIcons";

import HistoryTable from "../../../components/StockTable/HistoryTable";

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

const SaleHistoryProps = {
  title:'Sale History',
  link:'Add Sale',
  tableheader:['Sale Date', 'Shares sold', 'Proceeds'],
  table: [
    {
      saledate: "4/15/2022",
      sharessold: 1234,
      proceeds: 325,
    },
    {
      saledate: "7/36/2022",
      sharessold: 65000,
      proceeds: 12500,
    },
  ],
};

const ExerciseHistoryProps = {
  title:'Exercise History',
  link:'Add Exercise',
  tableheader:['Exercise Date', 'Shares exercised', 'Total Spread'],
  table: [
    {
      saledate: "10/31/2021",
      sharessold: 500,
      proceeds: 16195,
    },
  ],
};
const BarChartProps = {
    ymax: 6728,
    ymin: 0,
    data: [
      {x:'10/15/2019', y:0},
      {x:'1/15/2020', y:0},
      {x:'4/15/2020', y:0},
      {x:'7/15/2020', y:0},
      {x:'10/15/2020', y:1682},
      {x:'1/15/2021', y:2000},
      {x:'4/15/2021', y:2489},
      {x:'7/15/2021', y:2965},
      {x:'10/15/2021', y:3364},
      {x:'1/15/2022', y:3780},
      {x:'4/15/2022', y:4208},
      {x:'7/15/2022', y:4692},
      {x:'10/15/2022', y:5046},
      {x:'1/15/2023', y:5456},
      {x:'4/15/2023', y:5908},
      {x:'7/15/2023', y:6372},
      {x:'10/15/2023', y:6728},
    ],
};
const StockTableProps = {
  table: [
    {
      id: "1",
      date: "10/15/2019",
      completed: 1,
      tasksDone: 420,
    },
    {
      id: "2",
      date: "1/15/2020",
      completed: 1,
      tasksDone: 420,
    },
    {
      id: "3",
      date: "4/15/2020",
      completed: 1,
      tasksDone: 420,
    },
    {
      id: "4",
      date: "7/15/2020",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "5",
      date: "10/15/2020",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "6",
      date: "1/15/2021",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "7",
      date: "4/15/2021",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "8",
      date: "7/15/2021",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "9",
      date: "10/15/2021",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "10",
      date: "1/15/2022",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "11",
      date: "4/15/2022",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "12",
      date: "7/15/2022",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "9",
      date: "10/15/2022",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "10",
      date: "1/15/2023",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "11",
      date: "4/15/2023",
      completed: 0,
      tasksDone: 420,
    },
    {
      id: "12",
      date: "7/15/2023",
      completed: 0,
      tasksDone: 420,
    },
  ],
};

const EquityDetail:React.FC<TEquityDetailProps> = React.forwardRef((props, ref) => {
    
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

  type TAddPlanProps = {
    planId: TSelect,
    type: TSelect,
    price: TSelect,
    date: TSelect,
    amount1: TSelect,
    expiryDate: TSelect,
    duration: TSelect,
    amount2: TSelect,
    yn: TSelect,
    extended: TSelect,
  }
  const [AddPlanProps, setAddPlanProps] = React.useState<TAddPlanProps>({
    planId: { value: "Placeholder", options: [""] },
    type: { value: "ISOa", options: ["ISO", "ISOa", "ISOb"] },
    price: { value: 10.65, options: [""] },
    date: { value: "2019-10-15", options: [""] },
    amount1: { value: 6728, options: [""] },
    expiryDate: { value: "2019-10-15", options: [""] },
    duration: { value: "48mo", options: ["48mo", "60mo", "72mo"] },
    amount2: { value: "12mo", options: ["12mo", "60mo", "72mo"] },
    yn: { value: "No", options: ["Yes", "No"] },
    extended: { value: "No", options: ["Yes", "No"] },
  });
  const AddPlanHandleChange = (e: {target:{name:any, value:string}}) =>{
    const temp:TAddPlanProps = AddPlanProps;
    const field:keyof TAddPlanProps = e.target.name;
    temp[field].value = e.target.value;
    setAddPlanProps({ ...temp });
  }
  const AddPlanOnSave = () => { console.log("----------", AddPlanProps); }

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
                                <Details title='Equity Detail' handleChange={DetailsHandleChange} {...DetailsProps} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Container>
                                        <AddPlan handleChange={AddPlanHandleChange} onSave={AddPlanOnSave} {...AddPlanProps} />
                                    </Container>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box width="30%" p={3} sx={{overflowX:'auto', pb:"120px"}}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TypoItem lineHeight="18px" >
                                Grant Details
                                </TypoItem>
                            </Grid>
                            <Grid item xs={12}> 
                                <Grid container>
                                    <Grid item xs={4} md={4}>
                                        <Grid container spacing="10px">
                                            <Grid item xs={12}>
                                            <PriceLabel>Grand ID</PriceLabel>
                                            </Grid>
                                            <Grid item xs={12}>
                                            <StockSelect
                                                input={<OutlinedInput />}
                                                IconComponent={SelectIcon}
                                                // value={props.company.value}
                                                name="company"
                                                // onChange={props.handleChange}
                                            >
                                                <option>RSU10813</option>
                                            </StockSelect>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>     
                            </Grid>
                            <Grid item xs={12}>
                              <Typography fontSize={16} fontWeight="700" sx={{pt:"10px"}}>Vested Schedule</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <BarChart {...BarChartProps} />
                            </Grid>
                            <Grid item xs={12}>
                              <StockTable {...StockTableProps} />
                            </Grid>
                            <Grid item xs={12}>
                              <HistoryTable {...SaleHistoryProps} />
                            </Grid>
                            <Grid item xs={12}>
                              <HistoryTable {...ExerciseHistoryProps} />
                            </Grid>
                        </Grid>
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

export default EquityDetail

type TEquityDetailProps = {
  modalClose: () => void
}