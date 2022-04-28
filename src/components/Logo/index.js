import React from "react";
import css from './style.module.css';
import logoImage from '../../assets/images/logo_done.png';
 
const Logo = () => (
    <div className={css.Logo}>
        <img src={logoImage} alt='logo'></img>
    </div>
);

export default Logo;