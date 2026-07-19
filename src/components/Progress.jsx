import { useMemo } from "react";
import "../style/progress.css"
const Progress = ({ w }) => {
    
    let val = useMemo(() => {
        let v;
        if (w === 2) {
            v = 100 / 3
        } else if (w === 3) {
            v = 100 / 2
        } else if(w === 4){
            v = 100
        }else{
            v = 0
        }
        return v
    }, [w])
    return (
        <div className="progress">
            <div className="line" style={{ width: `${val}%` }}></div>
            <div className={`same con ${w === 1? "current":""}`}>
                <i className="fa-solid fa-address-card"></i>
            </div>
            <div className={`same edu ${w === 2? "current":""}`}>
                <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className={`same con ${w === 3? "current":""}`}>
                <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <div className={`same con ${w === 4? "current":""}`}>
                <i className="fa-solid fa-house"></i>
            </div>
        </div>
    )
}

export default Progress