import React, { useState } from "react";
import Logo from "../../assets/images/logo.jpeg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./index.module.css";
const cx = classNames.bind(styles);
function Login(props) {
  const { setLogin } = props;
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  return (
    <div className={cx("wrap")}>
      <img src={Logo} alt="logo" />
      {/* <div className={cx("mt-5")}>
        <span className={cx("mx-1")}>姓名</span>
        <input
          value={name}
          className={cx("inputBox")}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className={cx("mt-2")}>
        <span className={cx("mx-1")}>密碼</span>
        <input
          value={password}
          className={cx("inputBox")}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div> */}
      <div
        className={cx("mt-5", "cursor-pointer", "startBtn")}
        // onClick={() => {
        //   if (name && password) {
        //     setLogin({ name: name, password: password });
        //     window.localStorage.setItem(
        //       "login",
        //       JSON.stringify({ name: name, password: password })
        //     );
        //     navigate("/category");
        //   } else {
        //     alert("請輸入帳號密碼");
        //   }
        // }}
        onClick={() => {
          setLogin({ name: "name", password: "password" });
          window.localStorage.setItem(
            "login",
            JSON.stringify({ name: "name", password: "password" })
          );
          navigate("/exam");
        }}>
        開始測驗
      </div>
    </div>
  );
}

export default Login;
