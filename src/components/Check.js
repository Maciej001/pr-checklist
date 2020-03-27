import React from "react";
import { IconContainer } from "./containers";

const Check = ({ checked }) =>
  console.log(`checked`, checked) || (
    <IconContainer color={checked ? "limegreen" : "lightgrey"}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40">
        <g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
          <path
            d="M 8.248,20.882L1.617,14.25c-1.124-1.187-1.074-3.06,0.113-4.185c1.141-1.081,2.928-1.082,4.07-0.001 l4.218,4.218l7.9-10.533c0.981-1.309,2.836-1.575,4.145-0.594s1.575,2.836,0.594,4.145l0,0L12.71,20.565 c-0.981,1.308-2.837,1.573-4.145,0.592C8.453,21.073,8.347,20.981,8.248,20.882z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </IconContainer>
  );

export default Check;
