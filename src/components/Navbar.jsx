import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Analysts from "./department/Analysts";
import Android from "./department/Android";
import Designers from "./department/Designers";
import IOS from "./department/iOS";
import Managers from "./department/Managers";
import BackOffice from "./department/BackOffice";
import Pr from "./department/Pr";
import Qa from "./department/QA";
import Support from "./department/Support";
import Hr from "./department/Hr";
import FrontEnd from "./department/Frontend";
import Backend from "./department/Backend";
import Modal from "./Modal";
import All from "./department/All";
import NotFound from "./FalsePage/NotFound";
import Crash from "./FalsePage/Crash";
function Navbar({ responseResult, statusCode, sortingMode }) {
  // console.log(responseResult);
  //   for (const key in responseResult) {
  // console.log(responseResult[key].url);
  //   }
  const checked = () =>
    responseResult === "error" || statusCode === "500" ? <Crash /> : "";
  const [modalActive, setModalActive] = useState();
  const [inputValue, setInputValue] = useState();
  let a;
  const [modeSort, setModeSort] = useState();
  const updateData = (value) => {
    setModeSort(value);
  };

  // const all = [];
  // const designers = [];
  // const analysts = [];
  // const ios = [];
  // const android = [];
  // const backend = [];
  // const frontend = [];
  // const backOffice = [];
  // const hr = [];
  // const pr = [];
  // const qa = [];
  // const managers = [];
  // const support = [];
  // for (const key in responseResult) {
  //   switch (true) {
  //     case responseResult[key].department === "design":
  //       designers.push(responseResult);
  //       break;
  //     case responseResult[key].department === "analytics":
  //       analysts.push(responseResult);

  //       break;
  //     case responseResult[key].department === "ios":
  //       ios.push(responseResult);

  //       break;
  //     case responseResult[key].department === "android":
  //       android.push(responseResult);

  //       break;
  //     case responseResult[key].department === "backend":
  //       backend.push(responseResult);

  //       break;
  //     case responseResult[key].department === "frontend":
  //       frontend.push(responseResult);

  //       break;
  //     case responseResult[key].department === "back_office":
  //       backOffice.push(responseResult);

  //       break;
  //     case responseResult[key].department === "hr":
  //       hr.push(responseResult);
  //       break;
  //     case responseResult[key].department === "pr":
  //       pr.push(responseResult);

  //       break;
  //     case responseResult[key].department === "qa":
  //       qa.push(responseResult);

  //       break;
  //     case responseResult[key].department === "management":
  //       managers.push(responseResult);

  //       break;
  //     case responseResult[key].department === "support":
  //       support.push(responseResult);
  //       break;
  //   }
  // }

  return (
    <div>
      <div className='wrapper_input_box'>
        <p className='wrapper_input_box_description'>Поиск</p>
        <div className='input_box-flex'>
          <input
            placeholder='Введи имя, тег, почту...'
            className='input_box_input'
            type='text'
            onChange={(event) => {
              setInputValue(event.target.value);

              // console.log(event.target.value);
            }}
          />
          <button
            className='input_box_buttonSort'
            onClick={() => setModalActive(true)}
          ></button>
        </div>
      </div>
      <BrowserRouter>
        <Links />
        {checked()}
        <Routes>
          <Route
            path=''
            element={<Crash data={responseResult} statusCode={statusCode} />}
          />
          <Route
            path='/All'
            element={
              <All
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Managers'
            element={
              <Managers
                data={responseResult}
                sortingMode={modeSort}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Designers'
            element={
              <Designers
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Analysts'
            element={
              <Analysts
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/IOS'
            element={
              <IOS
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Android'
            element={
              <Android
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Frontend'
            element={
              <FrontEnd
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Backend'
            element={
              <Backend
                data={responseResult}
                inputValue={inputValue}
                sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/BackOffice'
            element={
              <BackOffice
              data={responseResult}
              inputValue={inputValue}
              sortingMode={modeSort}

              />
            }
          />
          <Route
            path='/PR'
            element={
              <Pr
              data={responseResult}
              inputValue={inputValue}
              sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/QA'
            element={
              <Qa
              data={responseResult}
              inputValue={inputValue}
              sortingMode={modeSort}
              />
            }
          />
          <Route
            path='/Support'
            element={
              <Support
              data={responseResult}
              inputValue={inputValue}
              sortingMode={modeSort}
              />
            }
          />
          <Route

            path='/Hr'
            element={
              <Hr
              data={responseResult}
              inputValue={inputValue}
              sortingMode={modeSort}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        updateData={updateData}
      />
    </div>
  );
}

class Links extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const arrTo = [
      "/All",
      "/Designers",
      "/Analysts",
      "/iOS",
      "/Android",
      "/Frontend",
      "/Backend",
      "/BackOffice",
      "/Hr",
      "/Pr",
      "/Qa",
      "/Managers",
      "/Support",
    ];
    const arrNameTabs = [
      "Все",
      "Дизайн",
      "Аналитика",
      "IOS",
      "Android",
      "Frontend",
      "Backend",
      "Бэк-офис",
      "HR",
      "PR",
      "QA",
      "Менеджмент",
      "Техподдержка",
    ];
    const createTabs = arrTo.map((currentValue, i) => {
      return (
        <li key={i}>
          <NavLink
            to={`${currentValue}`}
            style={({ isActive }) => {
              return {
                display: "block",
                borderColor: isActive ? " #6534FF" : "",
                borderBottomStyle: isActive ? "solid" : "",
                paddingBottom: isActive ? "8px" : "",
                paddingLeft: isActive ? "12px" : "",
                paddingRight: isActive ? "12px" : "",
              };
            }}
          >
            {`${arrNameTabs[i]}`}
          </NavLink>
        </li>
      );
    });

    return (
      <div className='links_components'>
        <ul>{createTabs}</ul>
      </div>
    );
  }
}

export default Navbar;
