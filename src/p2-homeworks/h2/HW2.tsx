import React, {useState} from "react";
import Affairs from "./Affairs";
import s from './Affairs.module.css'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
}; // need to fix any
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): AffairType[] => { // need to fix any
    if (filter === "all") return affairs;
    else return affairs.filter((affair) => affair.priority === filter);
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): AffairType[] => { // need to fix any
    return affairs.filter((affair) => affair._id !== _id); // need to fix
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id)); // need to fix any

  return (
    <div>
      homeworks 2
      {/*should work (должно работать)*/}
      <div>
        <div className={s.wrapper}>
          <div className={s.app__wrapper}>
            <div className={s.maintitle__display}>
              <span className={s.maintitle__text}>List of affairs</span>
            </div>
            <Affairs
              data={filteredAffairs}
              setFilter={setFilter}
              deleteAffairCallback={deleteAffairCallback}
            />
          </div>
        </div>
      </div>

      
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
