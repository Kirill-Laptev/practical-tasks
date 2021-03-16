import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import s from './Header.module.css'


type HeaderPropsType = {
    onCategoryClick: () => void
}

const Header: React.FC<HeaderPropsType> = ({onCategoryClick}) => {

    
    return (
        <div className={s.header__menu}>
            {/* add NavLinks */}
        <NavLink to={PATH.PRE_JUNIOR} onClick={onCategoryClick}>Pre Junior</NavLink>
        <NavLink to={PATH.JUNIOR} onClick={onCategoryClick}>Junior</NavLink>
        <NavLink to={PATH.JUNIOR_PLUS} onClick={onCategoryClick}>Junior Plus</NavLink>
        </div>
    );
}

export default Header;
