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
    return (
      <div className='links_components'>
        <ul>
          <li>
            <NavLink
              to={"/All"}
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
              Все
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Designers"}
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
              Дизайн
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Analysts"}
              style={({ isActive }) => {
                return {
                  display: "block",
                  borderColor: isActive ? " #6534FF" : "",
                  borderBottomStyle: isActive ? "solid" : "",
                  paddingBottom: isActive ? "8px" : "",
                  // paddingLeft: isActive ? "12px" : "",
                  // paddingRight: isActive ? "12px" : "",
                };
              }}
            >
              Аналитика
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/iOS"}
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
              iOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Android"}
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
              Android
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Frontend"}
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
              Frontend
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Backend"}
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
              Backend
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/BackOffice"}
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
              Бэк-офис
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Hr"}
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
              HR
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Pr"}
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
              PR
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Qa"}
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
              QA
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Managers"}
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
              Менеджмент
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Support"}
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
              Техподдержка
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
