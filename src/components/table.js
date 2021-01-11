import React from "react";
import "../App.css";
import { TableData } from "../Data/TableData";

export const Table = () => {
  return (
    <>
      <table id="features">
        {TableData.map((item,index) => (
          <tr key={index}>
            <th>{item.name}</th>
            <td className="data">
              <span  className={item.starter ? "green" : "red"} >
                <i class="fa fa-square"></i>
              </span>
            </td>
            <td>
              <span className={item.professional ? "green" : "red"}>
                <i class="fa fa-square"></i>
              </span>
            </td>
            <td>
              <span className={item.organization ? "green" : "red"}>
                <i class="fa fa-square"></i>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
