import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import s from './Header.module.css'
import { CSSTransition } from "react-transition-group";

function HW5() {

    const [isCollapsed, setCollapsed] = React.useState<boolean>(false)

    const active = isCollapsed ? s.active : ''

    const onCategoryClick = () => {
        setCollapsed(false)
    }

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
            <div className={s.header}>
                <div className={s.header__burger + ' ' + active}
                onClick={() => setCollapsed(!isCollapsed)}>
                    <span></span>
                </div>
                {/* <CSSTransition in={isCollapsed} className="animation" timeout={500} unmountOnExit>
                    <Header />
                </CSSTransition> */}
                {isCollapsed && <Header onCategoryClick={onCategoryClick} />}
            </div>
            

            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
