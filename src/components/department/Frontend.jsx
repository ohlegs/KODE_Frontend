import React, { Component } from "react";

export default function Backend(props) {
  const { data, inputValue, sortingMode } = props;
  let arr = [];
  let obj;
  let sortArr = [];
  let variable = [];

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (data[key].department === "frontend") {
        arr.push(data[key]);
      }

      // obj = element
    }
  }
  // console.log(obj);
  // for (const key in data) {
  //   if (data !== null) {
  //     arr.push(data[key]);
  //   }
  // }
  // console.log(arr);
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

  const result = sortArr.map((item, i, array) => {
    return (
      <ul key={i}>
        <li>
          <div className='employee'>
            <img
              src={item.url}
              // onError='../../img/Rectangle\191.png'
              className='employee_img'
            />
            <div className='employee_text'>
              <p>{`${item.nameFirst} ${item.nameLase}`}</p>
              <p className='employee_department'>
                {" "}
                {item.department.charAt(0).toUpperCase() +
                  item.department.slice(1).replaceAll("_", " ")}
              </p>
            </div>
          </div>
        </li>
      </ul>
    );
  });

  return <div>{result}</div>;
}
