import * as React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, OutlinedInput, TextField } from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  PriceLabel,
  StockInput,
  StockSelect,
  BoxPanel,
  NumberFormatCustom,
} from "../../style/styledComponents";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  numberInput: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    width: "100%",
    "& input": { padding: "6px 8px" },
  },
});


type TSelect = {
  value: string|number,
  options: string[],
}

type TCategoryProps = {
  category: TSelect,
  description: TSelect,
  recurring: TSelect,
  currentAmount: TSelect,
  YTDAmount: TSelect,
  handleChange: (e: any) => void;
}

const  Category:React.FC<TCategoryProps> = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container spacing="8px">
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={1.5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Category</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.category.value}
                    name="category"
                    onChange={props.handleChange}
                  >
                    {props.category.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8} md={5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Description</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockInput
                    value={props.description.value}
                    name="description"
                    onChange={props.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={2}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Current Amount</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.numberInput}
                    variant="outlined"
                    value={props.currentAmount.value}
                    onChange={props.handleChange}
                    name="currentAmount"
                    InputProps={{
                      inputComponent: NumberFormatCustom as any,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={1.7}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>YTD Amount</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.numberInput}
                    variant="outlined"
                    value={props.YTDAmount.value}
                    onChange={props.handleChange}
                    name="YTDAmount"
                    InputProps={{
                      inputComponent: NumberFormatCustom as any,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} md={1.7}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Recurring</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.recurring.value}
                    name="recurring"
                    onChange={props.handleChange}
                  >
                    {props.recurring.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Category;
