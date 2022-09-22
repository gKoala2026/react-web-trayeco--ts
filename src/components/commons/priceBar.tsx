const PriceBar:React.FC<TPriceBarProps> = (props) => {
    return (
        <div style={{border:`1px solid`+props.color, width:'100%', height:'7px', display:'relative'}}>
          <div style={{ width:props.percent+'%', height:'7px', backgroundColor:props.color, display:'absolute'}}></div>
        </div>
    )
}

export default PriceBar;

export type TPriceBarProps = {
  percent: number,
  color: string
}