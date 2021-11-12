import React, { Component } from "react";
import { useState } from "react";
import "../App.css";
const Modal = ({ active, setActive }) => {
  const [input, setInput] = useState("sort_abc");
  const onRadioChange = (event) => {
    setInput(event.target.value);
  };
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
                  value={"sort_abc"}
                  checked={input === "sort_abc"}
                  onChange={onRadioChange}
                />
                По алфавиту
              </label>
            </div>
            <div className='modal_content_radButton_wrapper'>
              <label>
                <input
                  name='sort'
                  type='radio'
                  value={"sort_123"}
                  onChange={onRadioChange}
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
