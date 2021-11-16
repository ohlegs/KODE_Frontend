import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";
import NotFound from "../FalsePage/NotFound";
import EmployeeFirm from "./EmployeeFirm";
export default function All(props) {
  const { data, inputValue, sortingMode } = props;
  let arr = [];
  let sortArr = [];
  let variable = [];
  for (const key in data) {
    if (data !== null) {
      arr.push(data[key]);
    }
  }
  if (inputValue && inputValue.length >= 2) {
    if (typeof inputValue == "string") {
      variable = arr.filter((item, index) => {
        return item.nameFirst.includes(inputValue);
      });
      arr = variable;
    }
  }

  if (sortingMode == "sort_abc") {
    function SortArray(x, y) {
      if (x.nameFirst < y.nameFirst) {
        return -1;
      }
      if (x.nameFirst > y.nameFirst) {
        return 1;
      }
      return 0;
    }
    sortArr = arr.sort(SortArray);
  }

  if (sortingMode == "sort_123") {
    sortArr = arr.sort(function (a, b) {
      return new Date(a.birthday) - new Date(b.birthday);
    });
  }
  const result = sortArr.map((item, index) => {
    return (
      <li key={index}>
        <div className='employee'>
          <img
            src={item.url}
            // onError='../../img/Rectangle\191.png'
            className='employee_img'
          />
          <div className='employee_text'>
            <Link
              to={`/EmployeeFirm/${item.nameFirst}:${item.nameLase}`}
            >{`${item.nameFirst} ${item.nameLase}`}</Link>
            <p className='employee_department'>
              {item.department.charAt(0).toUpperCase() +
                item.department.slice(1).replaceAll("_", " ")}
            </p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>{result.length > 0 ? result : <NotFound />}</ul>
    </div>
  );
}
