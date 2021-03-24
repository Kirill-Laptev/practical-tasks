import React, { ChangeEvent } from "react";
import s from "./HW12.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeAC } from "./bll/themeReducer";


function HW12() {
    const dispatch = useDispatch()
    const {currentTheme, themes} = useSelector((state: AppStoreType) => state.theme)

    // useDispatch, onChangeCallback

    const onChangeOption = (option: string) => {
        dispatch(changeThemeAC(option))
    }

    return (
        <>
        homeworks 12
        <div className={s.app__theme}>
            <div className={s[currentTheme]}>
                <div className={`${s[currentTheme + '-text']} ${s.baseText}`}>
                Let’s look at how to develop using JSX and Styled Components.
                Without Styled Components, you need to enter className in the node when styling. And to create or modify a CSS Class you will need to open the CSS file.
                But what happens? Usually there are so many files already open on your screen and it’s just chaotic to open another one. You can try adding the style property in the next line, but it generally ends up looking messy.
                </div>

                

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                
            </div>
                <SuperSelect 
                activeClass
                options={themes}
                onChangeOption={onChangeOption}
                value={currentTheme}
                 />
            </div>
        <hr/>
        <hr/>
        </>
    );
}

export default HW12;
