import * as React from "react";
import PropTypes from "prop-types";
import { Container, Grid, OutlinedInput, } from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  GrayBoxPanel,
  TypoItem,
  PriceLabel,
  StockSelect,
} from "../../style/styledComponents";


type TSelect = {
  value: string|number,
  options: string[],
}

type IDetailProps = {
  title?: string,
  member: TSelect,
  company: TSelect,
  frequency: TSelect,
  type: TSelect,
  handleChange: (e: any) => void;
}


const Details:React.FC<IDetailProps> = (props) => {

  return (
    <GrayBoxPanel p={3}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TypoItem lineHeight="18px" >
          {props.title}
          </TypoItem>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Household Member</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.member.value}
                    name="member"
                    onChange={props.handleChange}
                  >
                    {props.member.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={2}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Company</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.company.value}
                    name="company"
                    onChange={props.handleChange}
                  >
                    {props.company.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Paystub Frequency</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.frequency.value}
                    name="frequency"
                    onChange={props.handleChange}
                  >
                    {props.frequency.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={1.5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Type</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.type.value}
                    name="type"
                    onChange={props.handleChange}
                  >
                    {props.type.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GrayBoxPanel>
  );
};

export default Details;
