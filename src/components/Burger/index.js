import React from "react";
import css from "./style.module.css";
import BurgerIngredient from "../BurgerIngredient";
import {connect} from 'react-redux';

const Burger = (props) => {

    let contents = [];
    let items = Object.entries(props.ing);

    items.map( el => {
        for (let i=0; i<el[1]; i++){
            contents.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]}/>);
        } 
        
        return null;
    });

    if (contents.length === 0) {
        contents = <p>Та орцоо тохируулж өгнө үү!</p>;
    }

    return (<div className={css.Burger}>
        <BurgerIngredient type="bread-top"/>
        {contents}
        <BurgerIngredient type="bread-bottom"/>
    </div>);
}

const mapStateToProps = state => {
    return {
        ing: state.burgerReducer.ing
    }
}

export default connect(mapStateToProps)(Burger);
