import React, {useState, ChangeEvent} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onSuperChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <>
        homeworks 11
            <div className={s.app__slider}>
                

                {/*should work (должно работать)*/}
                <div className={s.slider__base}>
                    <div className={s.base__value}>{value1}</div>
                    <SuperRange
                        onChangeRange={onChangeRange}
                        value={value1}
                    />
                </div>

                <div className={s.slider__doublerange}>
                    <div className={s.doublerange__min}>{value1}</div>
                    <SuperDoubleRange
                        onChangeRange={onSuperChangeRange}
                        value={[value1, value2]}
                    />
                    <div className={s.doublerange__max}>{value2}</div>
                </div>

                
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperRange/>*/}
                {/*<AlternativeSuperDoubleRange/>*/}
                
            </div>
            <hr/>
            <hr/>
        </>
    );
}

export default HW11;
