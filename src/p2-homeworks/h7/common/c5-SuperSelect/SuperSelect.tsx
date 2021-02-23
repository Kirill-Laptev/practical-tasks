import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import { v1 } from "uuid";
import s from '../../HW7.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options ? options.map((el) => {
        return (
            <option key={v1()} value={el}>{el}</option>
        )
    }) : []

    

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <div className={s.select}>
            <select onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>
    );
}

export default SuperSelect;
