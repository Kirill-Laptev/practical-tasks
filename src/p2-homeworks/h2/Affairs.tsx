import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

const Affairs = (props: AffairsPropsType) => {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }; // need to fix
    const setHigh = () => {
        props.setFilter('high')
    };
    const setMiddle = () => {
        props.setFilter('middle')
    };
    const setLow = () => {
        props.setFilter('low')
    };

    return (
        <>
        <div className={s.app__inner}>
            {mappedAffairs}
        </div>
        <div className={s.task__filters}>
        <button className={s.task__filter__all} onClick={setAll}>All</button>
        <button className={s.task__filter__high} onClick={setHigh}>High</button>
        <button className={s.task__filter__middle} onClick={setMiddle}>Middle</button>
        <button className={s.task__filter__low} onClick={setLow}>Low</button>
    </div>
    </>
    );
}

export default Affairs;
