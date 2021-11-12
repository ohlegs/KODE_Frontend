import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./App.css";
import Crash from "./components/FalsePage/Crash";
import Navbar from "./components/Navbar.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      responseResult: null,
    };
  }
  render() {
    const axios = require("axios").default;
    axios
      .get(
        "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",
        {
          title: "Title of post",
          body: "Body of post",
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        const objAll = {};

        for (const key in response.data.items) {
          objAll[`${response.data.items[key].id}`] = {
            url: response.data.items[key].avatarUrl,
            nameFirst: response.data.items[key].firstName,
            nameLase: response.data.items[key].lastName,
            phone: response.data.items[key].phone,
            birthday: response.data.items[key].birthday,
            position: response.data.items[key].position,
            position: response.data.items[key].position,
            department: response.data.items[key].department,
          };
        }
        this.setState({ responseResult: objAll });
      })
      .catch((error) => this.setState({ responseResult: "error" }));

    return (
      <div className='root'>
        <Navbar responseResult={this.state.responseResult} />
      </div>
    );
  }
}
export default App;
