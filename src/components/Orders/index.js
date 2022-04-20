import React from "react";

import css from './style.module.css';

const Orders = (props) => {
    return <div className={css.Orders}>
        <p>
            Хаяг: {props.orders.address.city}, {props.orders.address.district}, {props.orders.address.name}
        </p>
        <p>
            Орц: Гахайн мах-{props.orders.ing.bacon}, 
                 Үхрийн мах-{props.orders.ing.meat}, 
                 Бяслаг-{props.orders.ing.cheese}, 
                 Салад-{props.orders.ing.salad}
        </p>
        <p>
            Үнийн дүн: <strong>{props.orders.totalPrice}</strong>
        </p>
    </div>;
};

export default Orders;