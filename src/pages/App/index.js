import React, { useEffect, useState, Suspense } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ShipPage from "../ShipPage";
import LoginPage from "../LoginPage";
import { connect } from "react-redux";
import Logout from "../../components/Logout";
import { Navigate } from "react-router-dom";
import * as actions from "../../redux/action/loginActions";
import BurgerContext from "../../contexts/BurgerContext";

const BurgerPage = React.lazy(() => {
  return import("../../pages/BurgerPage");
});

const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});

const SignUpPage = React.lazy(() => {
  return import("../SignUpPage");
});

const App = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    // const refreshToken = localStorage.getItem('refreshToken');
    const expireDate = localStorage.getItem("expireDate");

    if (token) {
      if (expireDate > new Date()) {
        // Hugatsaa ni duusaagui bol
        props.reLogin(userId, token);
        props.logOutAfterMillSec(expireDate.getTime() - new Date().getTime());
      } else {
        // hugtsaa ni duussan bol
        props.logout();

        // eswel automation aar token oo shinchilj bolno
      }
    }
  }, []);

  return (
    <div className={css.App}>
      <Toolbar className={css.Toolbar} toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />

      <main className={css.Content}>
        {props.userId ? (
          <Suspense fallback={<div>Түр хүлээнэ үү!</div>}>
            <BurgerContext.Provider value={showSideBar}>
              <Routes>
                <Route path="/" element={<BurgerPage />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/ship/*" element={<ShipPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BurgerContext.Provider>
          </Suspense>
        ) : (
          <Suspense fallback={<div>Түр хүлээнэ үү!</div>}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Suspense>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reLogin: (userId, token) =>
      dispatch(actions.loginUserSuccess(userId, token)),
    logOutAfterMillSec: (ms) => dispatch(actions.logOutAfterMillSec(ms)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
