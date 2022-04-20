import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";
import css from './style.module.css';

const SideBar = (props) => {

    if(props.showSideBar){
        return (
            <div>
            <Shadow onClicked={props.toggleSideBar} show={props.showSideBar} />
            <div className={`${css.SideBar} ${css.Open}`}>
                <div className={css.Logo}>
                    <Logo/>
                </div>   
                <Menu/>
            </div>
        </div>
        );
    } else {
        return (<div>
            <Shadow onClicked={props.toggleSideBar} show={props.showSideBar}/>
            <div className={`${css.SideBar} ${css.Close}`}>
                <div className={css.Logo}>
                    <Logo/>
                </div>   
                <Menu/>
            </div>
        </div>);
    }
};

export default SideBar;