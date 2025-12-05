"use client"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MyCircularProgressbar({solved, total}) {
    
    const fraction = solved / total;
    const percentage = Math.floor(fraction*100);

    return (
        <CircularProgressbar 
                    value={solved} 
                    maxValue={total} 
                    text={`${percentage}%`}
                    styles={buildStyles({
                        fontFamily: "Inter, sans-serif",
                        textSize: "18px",
                        textColor: "#3A82F6",
                        pathColor: "#3A82F6",
                        trailColor: "#2E3540",
                    })}
        />
    )
}