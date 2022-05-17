import React, {useContext} from 'react';
import "../styles/btnToggle.scss";
import { ThemeContext } from '../component/ThemeContext';

function BtnToggle(props) {

    const { toggleTheme, theme } = useContext
    (ThemeContext)

    return (
        <div onClick={toggleTheme} className={theme ? 'btn-toggle goLight' : "btn-toggle goDark"}>
            {theme ? "Dark" : "Light"}
        </div>
    );
}

export default BtnToggle;