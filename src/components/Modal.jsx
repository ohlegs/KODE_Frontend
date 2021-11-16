import React, { Component } from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
const Modal = (props) => {
  const { active, setActive, updateData } = props;
  const [sortingMode, setSortingMode] = useState("sort_abc");
  // const onRadioChange = (event) => {
  //   setSortingMode(event.target.value);
  // };
  useEffect(() => {
    updateData(sortingMode);
  }, [sortingMode]);
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal active" : "modal"}
    >
      <div
        className='modal_content'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='modal_content_p_button'>
          <p>Сортировка</p>
          <button onClick={() => setActive(false)}></button>
        </div>
        <div className='modal_content_radButton'>
          <form>
            <div className='modal_content_radButton_wrapper'>
              <label>
                <input
                  name='sort'
                  type='radio'
                  onClick={() => {
                    {
                      setSortingMode("sort_abc");
                      setActive(false);
                    }
                  }}
                  // checked={sortingMode === "sort_abc"}
                  defaultChecked={true}
                  // onChange={onRadioChange}
                />
                По алфавиту
              </label>
            </div>
            <div className='modal_content_radButton_wrapper'>
              <label>
                <input
                  name='sort'
                  type='radio'
                  onClick={() => {
                    {
                      setSortingMode("sort_123");
                      setActive(false);
                    }
                  }}
                  // onChange={onRadioChange}
                />
                По дате рождения
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
