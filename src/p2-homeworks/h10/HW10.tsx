import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { useSelector, useDispatch } from "react-redux";
import { AppStoreType } from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import loader from '../../assets/img/spin.svg'
import s from './HW10.module.css'


function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector((state: AppStoreType) => state.loading.isLoading)
   

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <>
        homeworks 10
        <div className={s.loader__wrapper}>
            <div className={s.loader__inner}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div className={s.loader__body}><img src={loader}/></div>
                    ) : (
                        <div>
                            <SuperButton className={s.loader__button} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }

            </div>
        </div>
        <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
                <hr/>
        </>
    );
}

export default HW10;
