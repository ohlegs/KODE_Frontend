import React, { Component } from "react";
import "../../ErrorPagesStyle.css";
export default class NotFound extends Component {
  render() {
    return <div className="notFound">
      <div className="notFound_content">
        <div className="notFound_content_img"></div>
        <p>Мы никого не нашли</p>
        <p>Попробуй скорректировать запрос</p>
      </div>
    </div>;
  }
}
