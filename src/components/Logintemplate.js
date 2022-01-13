import React, { useState } from "react";
import "../login.css";

function Logintemplate({allUsers,setCurrentUser }) {


    const [activeUser,setActiveUser] = useState({})

    function loginControl() {
  
      const inputEmail = document.querySelector("#email");
      const inputPassword = document.querySelector("#password");
  
      const email = inputEmail.value;
      const password = inputPassword.value;
  
      const gettingUser = allUsers.filter((user) => {
        return user.email === email && parseInt(password) === user.password;
      });
  
      setActiveUser(gettingUser[0] ? { ...gettingUser[0], active: true } : {});
  
      setCurrentUser({ ...gettingUser[0], active: true });
    }
  
    console.log(allUsers);


  return (
    <div>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
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
                <input type="submit" class="button" value="Sign In" />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
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
                <label for="pass" class="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input id="pass" type="text" class="input" />
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign Up" />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logintemplate;
