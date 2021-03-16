import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css'

function Clock() {
    const [timerID, setTimerID] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        window.clearInterval(timerID)
    }
    const start = () => {
        stop();
        setDate(new Date())
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerID(id);
    }

    const onMouseEnter = () => { 
        setShow(true)
    };
    
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = 
    `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()} :
    ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} :
    ${date.getSeconds() < 10 ? '0' + date.getSeconds() :  date.getSeconds()}`; // fix with date

    const stringDate = `Today : ${date.toLocaleDateString()}`; // fix with date

    return (
        <div className={s.clock}>
            <div
                className={s.clock__body}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={s.clock__time}>{stringTime}</div>
                {show && (
                <div className={s.date}>
                    <div>{stringDate}</div>
                </div>
            )}
            </div>

            
            <div className={s.buttons}>
                <SuperButton className={s.button_start} onClick={start}>start</SuperButton>
                <SuperButton className={s.button_stop} onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
