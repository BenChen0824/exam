import React, { useState } from "react";

import Logo from "../../assets/images/logo.jpeg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./index.module.css";
const cx = classNames.bind(styles);
function Category(props) {
  const [questionType, setQuestionType] = React.useState("");
  const navigate = useNavigate();
  const questiionListType = [
    { type: "math", id: 1, name: "數學" },
    { type: "english", id: 2, name: "英文" },
    { type: "chinese", id: 3, name: "國文" },
  ];
  return (
    <div className={cx("wrap")}>
      <img src={Logo} alt="logo" />
      <div className={cx("mt-5", "d-flex", "")}>
        {questiionListType.map((v) => {
          return (
            <span
              className={cx(
                "questiionListBtn",
                "mx-1",
                "cursor-pointer",
                v.type === questionType ? "active" : ""
              )}
              key={v.id}
              onClick={() => {
                setQuestionType(v.type);
              }}>
              {v.name}
            </span>
          );
        })}
      </div>

      <div
        className={cx("mt-2", "cursor-pointer", "submitBtn")}
        onClick={() => {
          if (questionType) {
            navigate("/exam");
          } else {
            alert("請選擇題型");
          }
        }}>
        開始作答
      </div>
    </div>
  );
}

export default Category;
