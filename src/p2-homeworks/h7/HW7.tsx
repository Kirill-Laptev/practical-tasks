import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from './HW7.module.css'

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1]);

    console.log('rerender')

    return (
        <div>
           
            homeworks 7

            {/*should work (должно работать)*/}
                <div className={s.content}>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
               
                    <SuperRadio
                        name={"radio"}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    );
}

export default HW7;
