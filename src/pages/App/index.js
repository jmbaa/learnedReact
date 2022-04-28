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
import BurgerPage from "../../pages/BurgerPage";
import OrderPage from "../OrderPage";
import SignUpPage from "../SignUpPage";
import Footer from "../../components/Footer";
import SurveyForm from "../../components/SurveyForm";
import SurveyListPage from "../SurveyListPage";
import ProfilePage from "../ProfilePage";
import PostSurvey from "../../components/PostSurvey";
import Alert from "../../components/General/Alert";

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

  // <div className={css.App}>
  //   <Toolbar className={css.Toolbar} toggleSideBar={toggleSideBar} />
  //   <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />

  return (
    <div className={css.App}>
      <Toolbar className={css.Toolbar} toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        {props.userRole === "user" && (
          <Routes>
            <Route
              path="/"
              element={<Alert type="success" message="Амжиллттай нэвтэрлээ" />}
            />
            <Route path="/works" element={<div>works</div>} />
            <Route path="/problems" element={<div>problems</div>} />
            <Route path="/surveys" element={<SurveyListPage />} />
            <Route path="/surveys/:id" element={<PostSurvey />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}

        {props.userRole === "work_poster" && (
          <Routes>
            <Route
              path="/"
              element={<Alert type="success" message="Амжиллттай нэвтэрлээ" />}
            />
            <Route path="/addWorks" element={<div>add work</div>} />
            <Route path="/addProblems" element={<div>add problem</div>} />
            <Route path="/addSurvey" element={<div>add survey</div>} />
            <Route path="/works" element={<div>works</div>} />
            <Route path="/problems" element={<div>problems</div>} />
            <Route path="/surveys" element={<SurveyListPage />} />
            <Route path="/surveys/:id/report" element={<PostSurvey />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}

        {props.userRole === "admin" && <div>You are admin mf!</div>}

        {!props.userRole && (
          <Suspense fallback={<div>Түр хүлээнэ үү!</div>}>
            <Routes>
              <Route path="/" element={<div>home page</div>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Suspense>
        )}
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userRole: state.authReducer.user.role,
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
