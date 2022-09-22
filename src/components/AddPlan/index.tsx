import * as React from "react";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import {
  Grid,
  Divider,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { SelectIcon } from "../commons/icon/multipleIcons";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  BoxPanel,
  PriceLabel,
  PriceNumberFormatCustom,
  StockInput,
  StockSelect,
  NumberFormatCustom,
} from "../../style/styledComponents";

const useStyles = makeStyles({
  mt10: {
    marginTop: "10px !important",
  },
  relative: {
    position: "relative",
  },
  dateStyle: {
    position: "absolute",
    pointerEvents: "none",
    width: "92% !important",
    height: "92%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& fieldset": { border: "1px solid transparent" },
  },
  numberInput: {
    width: "100%",
    "& input": { padding: "6px 8px" },
  },
});

const AddPlan:React.FC<TAddPlanProps> = (props) => {
  const classes = useStyles();

  return (
    <BoxPanel p={1.5}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7.5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Grant ID</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockInput
                    value={props.planId.value}
                    name="planId"
                    onChange={props.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={1.5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Equity Type</PriceLabel>
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
            <Grid item xs={4} md={1.5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Exercise Price</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.numberInput}
                    variant="outlined"
                    value={props.price.value}
                    onChange={props.handleChange}
                    name="price"
                    InputProps={{
                      inputComponent: PriceNumberFormatCustom as any,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={1.5}>
              <Grid container>
                <Grid item xs={12}>
                  <PriceLabel>Grant Date</PriceLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={`${classes.relative} ${classes.mt10} `}
                >
                  <StockInput
                    type="date"
                    name="date"
                    onChange={props.handleChange}
                  />
                  <StockInput
                    type="text"
                    className={classes.dateStyle}
                    value={moment(props.date.value).format("MM/DD/YY")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={7} md={3}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Options Granted</PriceLabel>
                </Grid>
                <Grid container item xs={12}>
                  <TextField
                    className={classes.numberInput}
                    variant="outlined"
                    value={props.amount1.value}
                    onChange={props.handleChange}
                    name="amount1"
                    InputProps={{
                      inputComponent: NumberFormatCustom as any,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} md={1.8}>
              <Grid container>
                <Grid item xs={12}>
                  <PriceLabel>Expiry Date</PriceLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={`${classes.relative} ${classes.mt10} `}
                >
                  <StockInput
                    type="date"
                    name="expiryDate"
                    onChange={props.handleChange}
                  />
                  <StockInput
                    type="text"
                    className={classes.dateStyle}
                    value={moment(props.expiryDate.value).format("MM/DD/YY")}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={1.8}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Vesting Period</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.duration.value}
                    name="duration"
                    onChange={props.handleChange}
                  >
                    {props.duration.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={1.6}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Cliff</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.amount2.value}
                    name="amount2"
                    onChange={props.handleChange}
                  >
                    {props.amount2.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={1.6}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Early Exercisable</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.yn.value}
                    name="yn"
                    onChange={props.handleChange}
                  >
                    {props.yn.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={2.2}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>
                  Extended PTE Window <InfoOutlinedIcon sx={{fontSize:'16px'}}/>
                  </PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.extended.value}
                    name="extended"
                    onChange={props.handleChange}
                  >
                    {props.extended.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container pb="12px">
            <Link
              flexGrow="1"
              color={"#EB5757"}
              className="text-decoration-red cursor"
            >
              Delete Grant  
            </Link>
            <Link
              color={"#828282"}
              pr="16px"
              className="text-decoration-gray cursor"
            >
              Cancel
            </Link>
            <Link className="cursor" onClick={() => props.onSave()}>
              Save
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </BoxPanel>
  );
};

export default AddPlan;

export type TSelect = {
  value: string|number,
  options: string[],
}

export type TAddPlanProps = {
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
  handleChange: (e:any) => void,
  onSave:() => void,
}
