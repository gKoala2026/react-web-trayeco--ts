import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  guage: {
    // height: "100vh",
  },
  symbol: {
    overflow: "visible",
  },
  area: {
    fill: "none",
    strokeWidth: "15",
  },
  stroke: {
    fill: "none",
    stroke: "#333",
    strokeWidth: "2",
    strokeLinejoin: "round",
  },
});

const StrokeGauge = ({ max, min, width, height, strokeValue, part1, part2 }:{max:number, min: number, width:number, height:number, strokeValue:number, part1:string, part2:string}) => {
  const props = {
    strokeValue,
    width,
    height,
    max,
    min,
    part1,
    part2
  };
  const classes = useStyles(props);

  return (
    <svg
      viewBox="-60 -60 120 120"
      className={classes.guage}
      width={width}
      height={height}
    >
      <symbol className={classes.symbol} id="limit">
        <path d="M 0,41 V 54" />
      </symbol>
      {/* data areas in reverse order  */}
      <path
        id="area-1"
        stroke="#333"
        strokeDasharray={`calc(${strokeValue / (max - min)} * 100px) 100px`}
        className={classes.area}
        d="M -33.588,33.587 A 47.5,47.5 0 1 1 33.588,33.588"
        pathLength="100"
      />
      <rect x="-24%" y="-10%" width="10" height="10" fill="#333" />
      <foreignObject
        className="gauge-font"
        x="-12%"
        y="-22.5%"
        width="260px"
        height="100px"
      >
        <p>{part1}</p>
      </foreignObject>
      <rect
        x="-23%"
        y="5%"
        width="8"
        height="8"
        fill="white"
        stroke="#333"
        strokeWidth="2"
      />
      <foreignObject
        className="gauge-font"
        x="-12%"
        y="-8.5%"
        width="260px"
        height="100px"
      >
        <p>{part2}</p>
      </foreignObject>
      <g className={classes.stroke}>
        {/* static outer border  */}
        <path d="M -38.184,38.184 A 54,54 0 1 1 38.184,38.184 L 28.991,28.991 A 41,41 0 1 0 -28.991,28.991 Z" />
      </g>
    </svg>
  );
};

StrokeGauge.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  strokeValue: PropTypes.number,
  obliqueValue: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default StrokeGauge;
