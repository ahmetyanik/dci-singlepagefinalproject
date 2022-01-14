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
      <div class="login-wrap">
        <div class="login-html">
          <Singinsignupbuttons />
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label id="email" for="user" class="label">
                  Username
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label id="password" for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <input
                  onClick={loginControl}
                  type="submit"
                  class="button"
                  value="Sign In"
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
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
