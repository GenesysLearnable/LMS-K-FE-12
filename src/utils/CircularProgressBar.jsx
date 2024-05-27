import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import PropTypes from 'prop-types'

export default function CircularProgressBar({value, color, valueColor, fontFamily, fontSize, fontWeight}) {
  return (
    <div style={{ width: 100, height: 100}}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '20px',
          pathColor: color,
          textColor: valueColor,
          trailColor: '#d6d6d6',
          textStyle: {
            fill: valueColor, 
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
          },
        })}
      />
    </div>
  )
}

CircularProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  valueColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  strokeWidth: PropTypes.number,
};
