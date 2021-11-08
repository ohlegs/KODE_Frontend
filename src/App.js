import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
function App() {
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
    .then((response) => console.log(response.data.items))
    .catch((error) => console.log(error));

  return <div className='app'>{<Navbar />}</div>;
}

export default App;
