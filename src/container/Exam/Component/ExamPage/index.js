import React from "react";

import Latex from "react-latex";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ChevronDoubleLeft, ChevronDoubleRight } from "react-bootstrap-icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import { mhchemParser } from "mhchemparser";
import { InlineMath, BlockMath } from "react-katex";
import classNames from "classnames/bind";
import styles from "./index.module.css";
const cx = classNames.bind(styles);

function ExamPage(props) {
  const { str1 } = props;
  const str = "{A + B \\xrightarrow{a} C}";
  const str2 = "{B^{23}} {B_{123}^{23}}";
  const str3 = mhchemParser.toTex("H+ + OH- <=> H2O");
  console.log("str3", str3);
  // const str3 =
  //   "{\\mathrm{H}{\\vphantom{A}}^{+} {}+{} \\mathrm{OH}{\\vphantom{A}}^{-} {}\\mathrel{\\rightleftharpoons}{} \\mathrm{H}{\\vphantom{A}}_{\\smash[t]{2}}\\mathrm{O}}";
  const str4 = "\\frac{\\text{m}}{\\text{s}^2}";
  // const str1 =
  //   "公式如下$$ y=x^{\\frac{2}{3}}+0.9\\sqrt{3.3-x^{2}}\\sin\\left(\\pi x\\right) $$公式如下";
  const getFrac = (str) => {
    return str.split("$$")[1];
  };
  const params = useParams();
  const navigate = useNavigate();
  const charLongDiscard = (str) => {
    return str.replace(/long/g, "");
  };
  return (
    <div className={cx("w-100", "flex-grow-1", "d-flex", "h-100", "relative")}>
      <div
        className={cx(
          "nextPageBlock",
          "d-flex",
          "align-items-center",
          "justify-content-center",
          params.id === "0" ? "cantClick" : ""
        )}
        onClick={() => {
          if (params.id !== "0") {
            navigate(`/exam/${Number(params.id) - 1}`);
          }
        }}>
        <ChevronDoubleLeft />
      </div>
      <div className={cx("flex-grow-1", "d-flex", "justify-content-center")}>
        <CopyToClipboard text={getFrac(str1)}>
          <h3 className={cx("cursor-pointer")} id="html_content">
            <div>第{Number(params.id) + 1}題</div>
            <BlockMath>{str}</BlockMath>
            <BlockMath>{str2}</BlockMath>
            <BlockMath>{charLongDiscard(str3)}</BlockMath>
            <BlockMath>{str4}</BlockMath>
          </h3>
        </CopyToClipboard>
      </div>

      <div
        className={cx(
          "nextPageBlock",
          "d-flex",
          "align-items-center",
          "justify-content-center",
          params.id === "2" ? "cantClick" : ""
        )}
        onClick={() => {
          if (params.id !== "2") {
            navigate(`/exam/${Number(params.id) + 1}`);
          }
        }}>
        <ChevronDoubleRight />
      </div>
    </div>
  );
}

export default ExamPage;
