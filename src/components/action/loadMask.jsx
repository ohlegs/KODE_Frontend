import React, { Component } from "react";
import "../../App.css";
export default class LoadMask extends Component {
  render() {
    return (
      <div className='loadMask_wrapper'>
        <div className='loadMask_wrapper_img  animGradient'></div>
        <div className='loadMask_wrapper_text '>
            <div className="loadMask_wrapper_text_b animGradient"></div>
            <div className="loadMask_wrapper_text_l animGradient"></div>

        </div>
      </div>
    );
  }
}
