import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "../../components/Burger";
import BurgerControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const navigate = useNavigate();

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  const continueOrder = () => {
    //  URL params ashiglaj component hoorond query ugudul damjuulah bolomjtoi bolgoj hiij bsan
    // let params = [];
    // for (let orts in props.ing) {
    //   params.push(orts + "=" + props.ing[orts]);
    // }
    // params.push("totalPrice=" + props.price);
    // const query = params.join("&");

    navigate("/ship");

    closeConfirmModal();
  };

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummary
          onContinue={continueOrder}
          closeConfirmModal={closeConfirmModal}
        />
      </Modal>

      <Burger />

      <BurgerControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
