import React, { Component } from "react";
import "../../ErrorPagesStyle.css";
export default class Crash extends Component {
  render() {
    return (
      <div className='crashPage'>
        <div className='crashPage_content'>
          <div className='crashPage_content_img'></div>
          <p className="crashPage_content_boldText">Какой-то сверхразум все сломал</p>
          <p className="crashPage_content_lightText">Постараемся быстро починить</p>
          <button className="crashPage_content_refreshPage">Попробовать снова</button>
        </div>
      </div>
    );
  }
}
