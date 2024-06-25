import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import ExamPDF from "./Component/ExamPDF/index.js";
import Calculator from "../../component/Calculator";
import ExamPage from "./Component/ExamPage";
import AnswerPDF from "./Component/AnswerPDF";
import Logo from "../../assets/images/logo.jpeg";
import { Routes, Route, useParams, Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
const cx = classNames.bind(styles);

function Exam(props) {
  const { setLogin, setCalculatorShow, calculatorShow, showPDF } = props;
  const [targetIndex, setTargetIndex] = React.useState(null);
  const params = useParams();
  console.log("params", params);

  let str1 =
    "$$ y=x^{\\frac{2}{3}}+0.9\\sqrt{3.3-x^{2}}\\sin\\left(\\pi x\\right) $$公式如下";
  function Layout() {
    return (
      <ul
        className={cx(
          "d-flex",
          "listType",
          "w-100",
          "justify-content-center",
          "mt-3",
          "mb-5",
          "p-0",
          "flex-grow-0"
        )}>
        {[1, 1, 1].map((v, i) => {
          return (
            <Link
              to={`/exam/${i}`}
              key={i}
              onClick={() => {
                setTargetIndex(i);
              }}>
              <li
                className={cx(
                  "mx-1",
                  "dot",
                  i === +params.id ? "pageChosen" : ""
                )}></li>
            </Link>
          );
        })}
      </ul>
    );
  }

  return showPDF ? (
    <div>
      <div className={cx("wrap")}>
        <div>
          <img height={80} src={Logo} alt="logo" />
        </div>
        {/* 這邊是為了pdf的轉換  */}
        <div className={cx("topicSelectBlock", "flex-grow-0", "mt-3")}>
          <div className={cx("d-flex", "align-items-center", "block")}>
            <div className={cx("col-1")}>科目</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
            <div className={cx("col-1")}>年級</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
            <div className={cx("col-1")}>題型類型</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
            <div className={cx("col-1")}>試券別</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
          </div>
          <div className={cx("d-flex", "align-items-center", "block")}>
            <div className={cx("col-1")}>出題者</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
            <div className={cx("col-1")}>年級</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
            <div className={cx("col-1")}>題型類型</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
            <div className={cx("col-1")}>試券別</div>
            <div className={cx("col-2")}>
              <select className={cx("w-100", "h-100")}></select>
            </div>
          </div>
          <div
            className={cx(
              "d-flex",
              "align-items-center",
              "justify-content-center",
              "block"
            )}>
            <div className={cx("col-2", "mx-1", "handleBtn")}>查詢</div>
            <div className={cx("col-2", "mx-1", "handleBtn")}>清空</div>
          </div>
        </div>
        <div className="d-none" id="question_html">
          <ExamPDF />
        </div>
        <div className={cx("mt-5", "hyperNoDecorate")}>
          <span
            className={cx("downloadBtn", "cursor-pointer")}
            onClick={() => {
              const element = document
                .getElementById("question_html")
                .cloneNode(true);
              element.classList.remove("d-none");
              // Use html2pdf to directly add HTML content to PDF
              html2pdf(element, { filename: "question.pdf" }).then((pdf) => {
                pdf.save();
              });
            }}>
            Question
          </span>
          <span className={cx("downloadBtn", "cursor-pointer")}>Answer</span>
        </div>
        <div className={cx("mt-5", "d-flex", "")}></div>
      </div>
    </div>
  ) : (
    <div
      className={cx(calculatorShow ? "width60vw" : "", "d-flex", "flex-column")}
      style={{ minHeight: "100vh" }}>
      <div
        className={cx("flex-grow-0")}
        onClick={() => {
          setLogin({ name: "", password: "" });
          window.localStorage.removeItem("login");
        }}>
        Exam
      </div>
      <span
        className={cx("cursor-pointer", "flex-grow-0", "text-center")}
        onClick={() => {
          setCalculatorShow(!calculatorShow);
        }}>
        <span className={cx("btnShow", "cursor-pointer")}>
          {" "}
          show calculator
        </span>
      </span>
      <Layout />
      <ExamPage str1={str1} />

      {calculatorShow && <Calculator />}
    </div>
  );
}

export default Exam;
