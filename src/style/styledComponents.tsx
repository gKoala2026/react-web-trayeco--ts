import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  OutlinedInput,
  NativeSelect,
  Box,
  Tab,
  Tabs,
  Select,
} from "@mui/material";
import {NumericFormat} from 'react-number-format';

// declare module 'react-number-format' {
// 	export class NumberFormat extends React.Component<NumberFormatProps, any> {
// 	  // Any public method on the NumberFormat component?
// 	}

// 	export interface NumberFormatValues {
// 		floatValue: number;
// 		formattedValue: string;
// 		value: string;
// 	}
  
// 	export interface NumberFormatProps extends React.HTMLAttributes<HTMLInputElement> {
// 		thousandSeparator?: boolean | ',' | '.' | ' ';
// 		decimalSeparator?: boolean | ',' | '.';
// 		decimalScale?: number;
// 		fixedDecimalScale?: boolean;
// 		allowNegative?: boolean;
// 		allowEmptyFormatting?: boolean;
// 		prefix?: string;
// 		value?: number | string
// 		isNumericString?: boolean;
// 		displayType?: 'input' | 'text';
// 		type?: 'text' | 'tel';
// 		format?: string | Function;
// 		removeFormatting?: (formattedValue: string) => string;
// 		mask?: string;
// 		customInput?: (inputComponent: React.ComponentType<any>) => void;
// 		onValueChange?: (values: NumberFormatValues, e: React.ChangeEvent<HTMLInputElement>) => void;
// 		isAllowed?: (values: NumberFormatValues) => boolean;
// 		renderText?: (formattedValue: string) => React.ReactNode;
// 		getInputRef?: (el) => void;
// 	}
  
// 	export default NumberFormat;
// }


export const BoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    elevation: 0,
}));

export const GrayBoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E0E0E0',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    elevation: 0
}));

export const TypoItem = styled(Typography)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    fontSize:"1.25rem",
    padding: theme.spacing(0, 0),
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    fontWeight: '700'
}));

export const PriceLabel = styled(Typography)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(0, 0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontWeight: "light",
    fontSize: "12px",
    height:'24px',
    alignItems:'end',
    display:'flex'
}));

export const PriceValue = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#333333',
    fontWeight: '400',
    fontSize: '2rem',
    lineHeight:'38.73px'
}));

export const StockInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    fontSize: "1rem",
    width: "100%",
    "> input": {
        padding: "6px 8px 6px 8px",
    },
}));

export const StockTableInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    fontsize:'14px',
    direction:'rtl',
    width:'100%',
    "> input": {
        padding: '6px 8px 6px 8px',
    }
}));

export const StockSelect = styled(NativeSelect)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    width: "100%",
    fontSize: "16px",
    "> select": {
        padding: "6px 8px 6px 8px",
    },
}));

export const StockSelectCurrent = styled(Select)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    width: "100%",
    fontSize: "16px",
    "> select": {
        padding: "6px 8px 6px 8px",
    },
}));

export const AvatarTypo = styled(Typography)(({ theme }) => ({
    backgroundColor: '#E0E0E0',
    ...theme.typography.body2,
    fontSize:"12px",
    padding: theme.spacing(0, 0),
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    width:'32px',
    height:'32px',
    borderRadius:'50%', 
    justifyContent:'center', 
    alignItems:'center', 
    display:'flex',
}));

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }

export const NumberFormatCustom:React.FC<CustomProps> = React.forwardRef(
    function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandsGroupStyle="lakh"
        thousandSeparator=","
      />
    );
});

export const PriceNumberFormatCustom:React.FC<CustomProps> = React.forwardRef(
    function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandsGroupStyle="lakh"
        thousandSeparator=","
        prefix="$"
      />
    );
});


interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
  
export const StyledTabs = styled((props:StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    textColor="inherit"
  />
))({
  '& .MuiButtonBase-root': {
      padding:0,
      paddingBottom:'2px',
      minHeight:'0px !important',
      minWidth:'0px !important'
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height:'1px'
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 60,
    width: '100%',
    backgroundColor: '#000',
  },
  minHeight:'0px !important'
});

interface StyledTabProps {
    label: string;
}

export const StyledTab = styled((props:StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(4),
    color: '#000',
    '&.Mui-selected': {
      fontWeight:'700'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const TabPanel:React.FC<TabPanelProps> = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
            <>
            {children}
            </>
        )}
      </div>
    );
}