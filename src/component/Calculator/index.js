import React from "react";
// import {
//   Expression,
//   GraphingCalculator,
//   useHelperExpression,
// } from "desmos-react";
import {
  Expression,
  GraphingCalculator,
  useHelperExpression,
} from "desmos-react";

import classNames from "classnames/bind";
import styles from "./index.module.css";
const cx = classNames.bind(styles);

function Calculator() {
  return (
    <div className={cx("calculator_show")}>
      {/* <GraphingCalculator
        attributes={{
          className: "calculator",
          style: { height: "100vh", width: "40vw" },
        }}
        fontSize={12}
        keypad
        projectorMode></GraphingCalculator> */}
      <GraphingCalculator
        attributes={{ className: "calculator" }}
        fontSize={18}
        keypad
        projectorMode>
        <Expression id="slider" latex="a=3" />
        {/* <Point /> */}
      </GraphingCalculator>
    </div>
  );
}

export default Calculator;
