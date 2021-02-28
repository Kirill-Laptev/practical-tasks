import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import s from './HW8.module.css'


export type InitialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<InitialPeopleType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <div className={s.table__item}>
                <div className={s.table__user}>
                    <div className={s.avatar}></div>
                    <div className={s.name}>{p.name}</div>
                </div>
                <div className={s.age}><div>{p.age}</div></div>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const checkOn18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <>
        homeworks 8
        <div className={s.app__wrapper}>
            <div className={s.app__inner}>
                {/*should work (должно работать)*/}
                <div className={s.table__title}>
                    <span>Friends List</span>
                </div>
            <div className={s.table}>
            
                <div className={s.table__content}>
                <div className={s.table__people}>{finalPeople}</div>
                </div>
                <div className={s.table__action}>
                    <div><button className={s.sortup__btn} onClick={sortUp}>sort up</button></div>
                    <div><button className={s.sortdown__btn} onClick={sortDown}>sort down</button></div>
                    <div><button className={s.check__btn} onClick={checkOn18}>check 18</button></div>
                </div>
                </div>
            </div>
        </div>
        <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </>
    );
}

export default HW8;
