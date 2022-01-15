import React, { useContext, useState } from "react";
import "../login.css";
import DataStore from "./DataStore";
import Singinsignupbuttons from "./Signinsignupbutton";

function Logintemplate() {
  const { allUsers, setAllUsers, currentUser, setCurrentUser } =
    useContext(DataStore);

  const [activeUser, setActiveUser] = useState({});

  /* Log In */

  function loginControl() {
    const inputUser = document.querySelector("#user");
    const inputPass = document.querySelector("#pass");

    const user = inputUser.value;
    const password = inputPass.value;

    const gettingUser = allUsers.filter((element) => {
      return element.name === user && parseInt(password) === element.password;
    });

    setActiveUser(gettingUser[0] ? { ...gettingUser[0], active: true } : {});

    setCurrentUser({ ...gettingUser[0], active: true });
  }

  console.log(activeUser);

  return (
    <div>
      <span
        style={{ color: "#c42b32" }}
        id="messagePassword"
        className="d-none "
      >
        Please type the same password!!!
      </span>
      <div className="login-wrap">
        <div className="login-html">
          <Singinsignupbuttons />
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label id="email" for="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label id="password" for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check"  />
                <label for="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  onClick={loginControl}
                  type="submit"
                  className="button"
                  value="Sign In"
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logintemplate;
