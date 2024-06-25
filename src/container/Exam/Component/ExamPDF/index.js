import React from "react";
import Latex from "react-latex";
import classNames from "classnames/bind";
import styles from "./index.module.css";
const cx = classNames.bind(styles);

// Create Document Component
function ExamPDF() {
  const str1 =
    "公式如下$$ y=x^{\\frac{2}{3}}+0.9\\sqrt{3.3-x^{2}}\\sin\\left(\\pi x\\right) $$公式如下";
  return (
    <div className="p-2">
      <div className={cx("cursor-pointer")}>
        <div>第1題</div>
        <Latex>{str1}</Latex>
      </div>
    </div>
  );
}

export default ExamPDF;
