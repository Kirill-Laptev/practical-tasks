import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onBlurHandler: () => void
    onInputClick: () => void
    active: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onBlurHandler, onInputClick, active} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''; // need to fix with (?:)
    const activeClass = active ? s.border : '';

    return (
        <div className={s.app}>
            <div className={s.app__form}>
                <div>
                <input 
                value={name} 
                placeholder='Input name' 
                onChange={setNameCallback} 
                onClick={onInputClick}
                onBlur={onBlurHandler}
                className={`${s.app__input} + ' ' + ${inputClass} + ' ' ${activeClass}`}/>
                <div className={s.error__message}><span>{error}</span></div>
            </div>
            <div><button onClick={addUser}>add</button></div>
            </div>
            <div className={s.users}>
                <div className={s.users__title}>Total users count :</div>
                <div className={s.users__counter}><span>{totalUsers}</span></div>
            </div>
        </div>
    );
}

export default Greeting;
