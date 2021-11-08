import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Analysts from "./Analysts";
import Android from "./Android";
import Designers from "./Designers";
import IOS from "./iOS";
import Managers from "./Managers";
import All from "./All";
function Navbar() {
  return (
    <div>
      <div className='wrapper_input_box'>
        <p className='wrapper_input_box_description'>Поиск</p>
        <div className='input_box-flex'>
          <input
            placeholder='Введи имя, тег, почту...'
            className='input_box_input'
            type='text'
          />
          <button className='input_box_buttonSort'></button>
        </div>
      </div>
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path='/All' element={<All />} />
          <Route path='/Managers' element={<Managers />} />
          <Route path='/Designers' element={<Designers />} />
          <Route path='/Analysts' element={<Analysts />} />
          <Route path='/IOS' element={<IOS />} />
          <Route path='/Android' element={<Android />} />
        </Routes>
      </BrowserRouter>
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
            >Все
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
              Designers
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
              Analysts
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
        </ul>
      </div>
    );
  }
}

export default Navbar;
