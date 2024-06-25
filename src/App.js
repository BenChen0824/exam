import "./App.css";
import React from "react";
import Login from "./container/Login";
import Exam from "./container/Exam";
import Category from "./container/Category";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import "katex/dist/katex.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
const cx = classNames.bind(styles);

function App() {
  const [login, setLogin] = React.useState(() => {
    const login = localStorage.getItem("login");
    if (login) {
      return JSON.parse(login);
    }
    return { name: "", password: "" };
  });
  const [calculatorShow, setCalculatorShow] = React.useState(false);

  return (
    // <div className={cx("App")}>
    //   {!login.name || !login.password ? (
    //     <Login setLogin={setLogin} />
    //   ) : (
    //     <Exam
    //       setLogin={setLogin}
    //       calculatorShow={calculatorShow}
    //       setCalculatorShow={setCalculatorShow}
    //     />
    //   )}

    //
    // </div>
    <div className={cx("App", "container")}>
      <Routes>
        <Route
          path="/login"
          element={<Login setLogin={setLogin} login={login} />}
        />
        <Route
          path="/category"
          element={
            !login.name || !login.password ? (
              <Navigate to="/login" />
            ) : (
              <Category />
            )
          }
        />
        <Route
          path="/exam"
          element={
            !login.name || !login.password ? (
              <Navigate to="/login" />
            ) : (
              <Exam
                showPDF={true}
                setLogin={setLogin}
                calculatorShow={calculatorShow}
                setCalculatorShow={setCalculatorShow}
              />
            )
          }
        />
        <Route
          path="/exam/:id"
          element={
            !login.name || !login.password ? (
              <Navigate to="/login" />
            ) : (
              <Exam
                showPDF={false}
                setLogin={setLogin}
                calculatorShow={calculatorShow}
                setCalculatorShow={setCalculatorShow}
              />
            )
          }
        />

        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
