import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { restoreState, saveState } from "./localStorage/localStorage";
import s from "./HW6.module.css";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
  };
  const restore = () => {
    const localStorageValue = restoreState("editable-span-value", value);
    setValue(localStorageValue);
  };

  return (
    <>
      homeworks 6{/*should work (должно работать)*/}
      <div className={s.app__wrapper}>
        <div className={s.app_inner}>
          <div>
            <SuperEditableSpan
              value={value}
              onChangeText={setValue}
              spanProps={{ children: value ? undefined : "enter text..." }}
            />
          </div>
          <div className={s.app__buttons}>
            <SuperButton className={s.app__btn_save} onClick={save}>
              save
            </SuperButton>
            <SuperButton className={s.app__btn_restore} onClick={restore}>
              restore
            </SuperButton>
          </div>
          {/*для личного творчества, могу проверить*/}
          {/*<AlternativeSuperEditableSpan/>*/}
        </div>
      </div>
      <hr />
      <hr />
    </>
  );
}

export default HW6;
