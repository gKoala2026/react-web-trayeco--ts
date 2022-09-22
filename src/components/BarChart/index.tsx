import * as React from "react";
import { Box, Container } from "@mui/material";
import Chart from "react-apexcharts";


const BarChart:React.FC<TBarChartProps> = (props) => {
  const options:any = {
    chart: {
      id: "apexchart-example",
      stacked: true,
    },
    colors: [
      ({ value, seriesIndex, dataPointIndex, w }:{value:number, seriesIndex:number, dataPointIndex:number, w:any}) => {
        let date = w.config.series[0].data[dataPointIndex]['x']
          if (new Date(date).getTime() < new Date(new Date().toISOString().slice(0, 10)).getTime()) {
            return "#219653";
          } else {
            return "#333";
          }
      },
    ],
    xaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: true,
            minHeight: 60,
            maxHeight: 180,
            datetimeFormatter: {
                year: 'MM/dd/yyyy',
                month: "MM/dd/yyyy",
                day: 'dd MMM',
                hour: 'HH:mm',
            },
        },
        type: 'datetime',
        tickPlacement: 'on'
    },
    yaxis: {
      min: props.ymin,
      max: props.ymax,
      tickAmount: 4,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '70%',
            barHeight: '70%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: ['#E0E0E0'],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
        }
    },
  };

  const series = [
    {
      name: "series-1",
      data: props.data,
    },
  ];

  return (
  <Box sx={{ border: 0, width:'100%' }}>
    <Chart
      options={options}
      series={series}
      type="bar"
      height={250}
      width={'100%'}
    />
  </Box>
  );
};

export default BarChart;

export type TBarChartProps = {
  ymax: number,
  ymin: number,
  data: {x:string, y:number}[],
};
