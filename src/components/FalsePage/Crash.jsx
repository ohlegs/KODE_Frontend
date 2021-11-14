import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import "../../ErrorPagesStyle.css";
export default class Crash extends Component {
  render() {
    return (
      <div className='crashPage'>
        <div className='crashPage_content'>
          <div className='crashPage_content_img'></div>
          <p className='crashPage_content_boldText'>
            Какой-то сверхразум все сломал
          </p>
          <p className='crashPage_content_lightText'>
            Постараемся быстро починить
          </p>
          <button
            onClick={() => window.location.reload()}
            className='crashPage_content_refreshPage'
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }
}
