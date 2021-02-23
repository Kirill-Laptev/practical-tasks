import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from '../../HW7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    console.log('rerender radio')

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                className={s.radio}
                // name, checked, value, onChange
                name={name}
                value={o}
                checked={o === value ? true : false}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : [];

    return (
        <div>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
