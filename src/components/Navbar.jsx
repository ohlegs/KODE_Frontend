import React from "react";
import { useState } from "react";
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
function Navbar({ responseResult }) {
  const checked = () => (responseResult === "error" ? <Crash /> : "");
  const [modalActive, setModalActive] = useState(false);
  console.log(responseResult);
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
              document.title = event.target.value ? event.target.value : "lol";
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
          <Route path='' element={<Crash />} />
          <Route path='/All' element={<All />} />
          <Route path='/Managers' element={<Managers />} />
          <Route path='/Designers' element={<Designers />} />
          <Route path='/Analysts' element={<Analysts />} />
          <Route path='/IOS' element={<IOS />} />
          <Route path='/Android' element={<Android />} />
          <Route path='/Frontend' element={<FrontEnd />} />
          <Route path='/Backend' element={<Backend />} />
          <Route path='/BackOffice' element={<BackOffice />} />
          <Route path='/PR' element={<Pr />} />
          <Route path='/QA' element={<Qa />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Hr' element={<Hr />} />
        </Routes>
      </BrowserRouter>
      <Modal active={modalActive} setActive={setModalActive} />
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
      "/Backend",
      "/Frontend",
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
