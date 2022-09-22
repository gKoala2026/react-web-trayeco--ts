import * as React from 'react';

import Layout from "../../layout"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Income from './Income';
import Equity from './Equity';
import Taxes from './Taxes';

import { StockSelectCurrent, StyledTab, StyledTabs, TabPanel } from '../../style/styledComponents';

import { Box, Container, Divider, Grid, MenuItem, OutlinedInput, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

const IncomeProps = {
  WageProgress: [
    {
      title:'Gross, YTD',
      price: 82500,
      totalPrice: 180000,
      info: 0
    },
    {
      title:'Deductions, YTD',
      price: -35475,
      totalPrice: -57600,
      info: 1
    },
    {
      title:'Net-to-bank, YTD',
      price: 47025,
      totalPrice: 122400,
      info: 0
    },
  ],
  InvestmentProgress: [
    {
      title:'Long Term Gains, YTD',
      price: 12138,
      totalPrice: 230381,
      info: 0
    },
    {
      title:'Short Term Gains, YTD',
      price: 4218,
      totalPrice: 8274,
      info: 0
    },
    {
      title:'Dividends, YTD',
      price: 938,
      totalPrice: 2103,
      info: 1
    },
  ],
  GooglePaystub: {
    title: 'Google Paystub',
    subtitle:['Jenny', '2022/08/04'],
    logo: 'Google.png',
    dims: [
        {
            title: 'Gross',
            value: 7500,
            info: 1,
            subtitle: '',
        },
        {
            title: 'Deductions',
            value: -3225,
            info: 1,
            subtitle: '',
        },
        {
            title: 'Net-to-bank',
            value: 4275,
            info: 0,
            subtitle: '',
        },
    ],
    updated: 48,
    link_1: ['Add Paystub', ''],
    link_2: ['View All Paystubs', '']
  },
  GoogleStockPlan: {
    title: 'Google Stock Plan',
    subtitle:['Jenny', '2022/08/04'],
    logo: 'Google.png',
    dims: [
      {
        title: 'Long Term Gains, YTD',
        value: 12138,
        info: 0,
        subtitle: ['Unrealized', 281394],
      },
      {
        title: 'Short Term Gains, YTD',
        value: 0,
        info: 0,
        subtitle: ['Unrealized', 18293],
      },
      {
        title: 'Dividends, YTD',
        value: 0,
        info: 0,
        subtitle: ['Unearned', 0],
      },
    ],
    updated: 91,
    link_1: ['Update Investments', ''],
    link_2: ['View Details', '']
  },
  TD: {
    title: 'TD Ameritrade Brokerage',
    subtitle:['Jenny', '2022/08/04'],
    logo: 'Ameritrade.png',
    dims: [
        {
            title: 'Long Term Gains, YTD',
            value: 0,
            info: 0,
            subtitle: ['Unrealized', 28281],
        },
        {
            title: 'Short Term Gains, YTD',
            value: 829,
            info: 0,
            subtitle: ['Unrealized', 2184],
        },
        {
            title: 'Dividends, YTD',
            value: 938,
            info: 0,
            subtitle: ['Unearned', 1271],
        },
    ],
    updated: 2,
    link_1: ['Update Investments', ''],
    link_2: ['View Details', '']
  }
}

const EquityProps = {
  totalEquityValue: 533242,
  GoogleStockPlan: {
    title:'Google Stock Plan',
    logo: '',
    price: [
      { title: "Total Value", price: 405203 },
      { title: "Current Value", price: 296250 },
      { title: "$GOOG Price", price: 2370 },
    ],
    progressBarGroup: [
      {
        title: "250 RSUs, 1 Grant ->",
        value: 376830,
        data: {
          min: 251,
          max: 0,
          status: [
            {
              pattern: 4,
              value: 0,
              label: "",
            },
            {
              pattern: 3,
              value: 19,
              label: "19 sell on vest",
            },
            {
              pattern: 5,
              value: 53,
              label: "34 Unvested",
            },
            {
              pattern: 2,
              value: 55,
            },
            {
              pattern: 0,
              value: 126,
              label: "72 Sold",
            },
            {
              pattern: 0,
              value: 251,
              label: "125 Held",
            },
          ],
        },
      },
      {
        title: "ESPP ->",
        value: 28400,
        data: {
          min: 9,
          max: 0,

          status: [
            {
              pattern: 1,
              value: 0,
              label: "",
            },
            {
              pattern: 0,
              value: 3,
              label: "3 Non-qualified",
            },
            {
              pattern: 0,
              value: 9,
              label: "9 Qualified",
            },
          ],
        },
      },
    ],
    updated:23
  },
  StripeStockPlan: {
    title:'Stripe Stock Plan',
    logo: 'Stripe.png',
    price: [
      { title: "Total Value", price: 128012 },
      { title: "Current Value", price: 128012 },
      { title: "409A Value (Jun 2022)", price: 49.39 },
    ],
    progressBarGroup: [
      {
        title: "7,239 ISOs, 2 Grants ->",
        value: 28400,
        data: {
          min: 5000,
          max: 0,

          status: [
            {
              pattern: 1,
              value: 0,
              label: "",
            },
            {
              pattern: 0,
              value: 1239,
              label: "1,239 Unexercised",
            },
            {
              pattern: 0,
              value: 5000,
              label: "5,000 Exercised",
            },
          ],
        },
      },
    ],
    updated:23
  },
  EquityEventData: [
    {
        icon:'certificate_icon.png',
        date:'June 15 2022',
        shares:['3 Shares Held (3 Sold)','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'September 15 2022',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'alert_icon.png',
        date:'September 30 2022',
        shares:['1,283 shares Expire','Stripe NSOs']
    },
    {
        icon:'sale_icon.png',
        date:'Nov 15 2022',
        shares:['5,000 shares qualified','Stripe ISOs']
    },
    {
        icon:'sale_icon.png',
        date:'Dec 1 2022',
        shares:['Google Open Trading Window','Google Stock Plan']
    },
    {
        icon:'certificate_icon.png',
        date:'January 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'April 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'June 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'September 15 2023',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'January 15 2024',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'April 15 2024',
        shares:['6 Shares Vest','Google RSUs']
    },
    {
        icon:'certificate_icon.png',
        date:'June 15 2024',
        shares:['5 Shares Vest (Final)','Google RSUs']
    },
  ],
}

const TaxesProps = {
  TotalTaxes: [
    {
      title:'Taxable Income Y/E',
      value: 197294
    },
    {
      title: 'Effective Tax Rate',
      value: 36
    },
    {
      title:'Total Taxed Owed Y/E',
      value: 84836
    },
  ],
  Underwithheld: {
    title: 'Underwithheld owed by year end',
    value: 23423
  },
  HeatMapProps: {
    heatMap: [
      { check: 1, title: "Q1", value: -100 },
      { check: 0, title: "Q2", value: 100 },
      { check: 0, title: "Q3", value: 100 },
      { check: 0, title: "Q4", value: 100000 },
    ],
    data: {
      min: 0,
      max: 100,
      status: [
        {
          pattern: 0,
          value: 0,
          // label: "Dim1",
        },
        {
          pattern: 2,
          value: 40,
          // label: "Dim2",
        },
      ],
    },
  },
  TaxesWageIncome: {
    title:'Taxes on wage income',
    updated: 15,
    col:['Type', 'Withheld to date', 'Year End', '% of wages'],
    breakdown: [
        {
        Type: "Federal Income Tax",
        Column1: 16823,
        Column2: 34411,
        Column3: "19.12%",
        },
        {
        Type: "Medicare",
        Column1: 822,
        Column2: 1164,
        Column3: "0.62%",
        },
        {
        Type: "Social Security (OASDI)",
        Column1: 7928,
        Column2: 9780,
        Column3: "5.45%",
        },
        {
        Type: "State Income Tax",
        Column1: 4281,
        Column2: 13284,
        Column3: "7.38%",
        },
        {
        Type: "State Other (CA DSI)",
        Column1: 281,
        Column2: 802,
        Column3: "1.48%",
        },
    ],
  },
  QuarterlyProps: {
    data: [
      { icon: "check", date: "April 15 2022", text: "Q1 Federal", price: 5035.75 },
      { icon: "check", date: "April 15 2022", text: "Q1 State", price: 423.29 },
      {
        icon: "bankNote",
        date: "Due June 15 2022",
        text: "Q2 Federal",
        price: 5035.75,
      },
      {
        icon: "bankNote",
        date: "Due June 15 2022",
        text: "Q2 State",
        price: 423.29,
      },
      {
        icon: "bankNote",
        date: "Due Sept 15 2022",
        text: "Q3 Federal",
        price: 5035.75,
      },
      {
        icon: "bankNote",
        date: "Due Sept 15 2022",
        text: "Q3 State",
        price: 423.29,
      },
      {
        icon: "bankNote",
        date: "Due Jan 15 2023",
        text: "Q4 Federal",
        price: 5035.75,
      },
      {
        icon: "bankNote",
        date: "Due Jan 15 2023",
        text: "Q4 State",
        price: 423.29,
      },
    ],
  },
  ToolTipProps: {
    data: [
      { item: "Qualified", value: 817 },
      { item: "Non-Qualified", value: 121 },
    ],
  },
  TaxesInvestmentIncome: {
    title:'Taxes on investment income',
    updated: 15,
    data: [
      {
        title: 'Long Term Taxes',
        value: 7500,
        info: 1,
        subtitle: '',
      },
      {
        title: 'Short Term Taxes',
        value: 3225,
        info: 1,
        subtitle: '',
      },
      {
        title: 'Dividend Taxes',
        value: 4275,
        info: 0,
        subtitle: '',
      },
      {
        title: 'Total Investment Taxes',
        value: 4275,
        info: 0,
        subtitle: '',
      },
    ],
  }
}

const HouseHold:React.FC = () => {
    const [value, setValue] = React.useState(0);
    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [age, setAge] = React.useState('10');
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return(
        <Layout>
          <Container>
              <Grid container alignItems='end' pt='45px' mb={3} spacing={2}>
                  <Grid item sx={{flexGrow:'1'}}>
                      <StyledTabs
                          onChange={handleChangeTab}
                          value={value}
                      >
                          <StyledTab label="Income" />
                          <StyledTab label="Equity" />
                          <StyledTab label="Taxes"/>
                      </StyledTabs>
                  </Grid>
                  <Grid item>
                        <Select
                        input={<OutlinedInput />}
                        id="demo-customized-select"
                        IconComponent={KeyboardArrowDownIcon}
                        value={age}
                        onChange={handleChange}
                        name="age"
                        sx={{
                            width: "100%",
                            fontSize: "16px",
                            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                            padding: "8px",
                            },
                            }}
                        >
                            <MenuItem value={10}>
                                2022(current)
                            </MenuItem >
                            <MenuItem value={20}>
                                2022(current)
                            </MenuItem >
                        </Select>
                  </Grid>
              </Grid>
              <Divider sx={{mb:'20px'}} />
              <TabPanel value={value} index={0}>
                <Income {...IncomeProps} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Equity {...EquityProps} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Taxes {...TaxesProps} />
              </TabPanel>
          </Container>        
        </Layout>
    )
}

export default HouseHold