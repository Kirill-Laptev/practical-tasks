import React, {useState} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any
    const [active, setActive] = useState<boolean>(false)

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.target.value); // need to fix
        setError('');
    };
    const addUser = () => {
        if(name.trim()){
            alert(name.trim()); // need to fix
            addUserCallback(name.trim())
            setName('')
        }
        else{
            setError('Введите имя')
        }
    };

    const onInputClick = () => {
        setActive(true)
        setError('')
    }

    const onBlurHandler = () => {
        setActive(false)
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onInputClick={onInputClick}
            onBlurHandler={onBlurHandler}
            active={active}
        />
    );
}

export default GreetingContainer;
