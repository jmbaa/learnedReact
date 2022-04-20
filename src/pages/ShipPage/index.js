import React from "react";
import Burger from "../../components/Burger";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import ShipContact from "../../components/ShipContact";
import { connect } from "react-redux";

const ShipPage = (props) => {
  //   URL params ashiglaj component hoorond query ugudul damjuulah bolomjtoi bolgoj hiij bsan
  //   componentWillMount() {
  //     const query = new URLSearchParams(props.router.location.search);
  //     for (let el of query.entries()) {
  //         if(el[0] !== 'totalPrice'){
  //             ing[el[0]] = el[1];
  //         }else {
  //             totalPrice = el[1];
  //         }
  //     }
  //     setState({ ing, totalPrice });
  //   }

  const navigate = useNavigate();

  const cancelOrder = () => {
    navigate(-1);
  };

  const goContact = () => {
    navigate("/ship/contact", { replace: true });
  };

  return (
    <div className={css.ShipPage}>
      <p>Таны захиалга амтттай харагдаж байна. Нийт {props.price}₮.</p>
      <Burger />
      <Button
        clickedBtn={cancelOrder}
        text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        btnType="Danger"
      />
      <Button
        clickedBtn={goContact}
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ БҮРТГЭХ"
        btnType="Success"
      />
      <Outlet />
      <Routes>
        <Route
          path="/contact"
          element={<ShipContact ing={props.ing} totalPrice={props.price} />}
        />
      </Routes>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    ing: state.burgerReducer.ing,
    price: state.burgerReducer.price,
  };
};

export default connect(mapStatetoProps)(ShipPage);
