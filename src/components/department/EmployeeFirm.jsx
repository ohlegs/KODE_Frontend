import React from "react";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
export default function EmployeeFirm() {
  let { info } = useParams();
  const axios = require("axios").default;
  let profileInfo = {};
  const [profile, setProfile] = useState();
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
      setProfile({ profile: response.data.items });
    })
    .catch((error) => {});

  for (const key in profile) {
    if (Object.hasOwnProperty.call(profile, key)) {
      const element = profile[key];
      for (const key in element) {
        if (Object.hasOwnProperty.call(element, key)) {
          if (
            info.replace(":", " ") ==
            `${element[key].firstName} ${element[key].lastName}`
          ) {
            profileInfo = element[key];
          }
        }
      }
    }
  }

  return (
    <div className='employeeFirm_wrapper'>
      <div className='employeeFirm'>
        <div>
          <button
            onClick={() => {
              window.history.back();
            }}
            className='employeeFirm_button'
          ></button>
          <div className='employeeFirm_description'>
            <img src={profileInfo.avatarUrl} alt='' />
            <p className='employeeFirm_description_boldText'>{`${profileInfo.firstName} ${profileInfo.lastName}`}</p>
            <p className='employeeFirm_description_liteText'>{`${profileInfo.department}`}</p>
          </div>
        </div>
      </div>
      <div className='employeeFirm_description_date_number'>
        <div className='employeeFirm_description_date'>
          <div></div> <p>{profileInfo.birthday}</p>
        </div>
        <div className='employeeFirm_description_number'>
          <div></div> +(999) <p>{profileInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}
