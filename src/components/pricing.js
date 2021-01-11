import React from "react";

import { Data } from "../Data/Data";
import { Plans } from "./plans";

export const Pricing = () => {
  return (
    <>
      <div className="main">
          <div className="features"><h2>Features</h2></div>

        
        <div className="pricing-group">
          {Data.map((item,index) => (
            <Plans
            key={index}
              name={item.name}
              tag={item.tag}
              price={item.price}
              button={item.button}
            />
          ))}
        </div>
      </div>
    </>
  );
};
