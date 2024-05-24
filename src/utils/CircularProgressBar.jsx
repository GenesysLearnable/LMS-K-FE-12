import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

export default function CircularProgressBar({value, color}) {
  return (
    <div style={{ width: 100, height: 100}}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: color,
          textColor: color,
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  )
}
