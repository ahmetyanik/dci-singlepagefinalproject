import React, { useContext, useState } from "react";
import DataStore from "./DataStore";
import Singinsignupbuttons from "./Signinsignupbutton";

function RegisterTemplate() {
  const { allUsers, setAllUsers, currentUser, setCurrentUser } =
    useContext(DataStore);

  /* Register */

  console.log(allUsers.length);

  const [person, setPerson] = useState({
    id: allUsers.length,
    name: "",
    email: "",
    password: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU",
    active: false,
    admin: false,
  });

  function inputChange(e) {
    let dataVonInput = e.target.value;

    e.target.name === "password"
      ? setPerson({ ...person, [e.target.name]: parseInt(dataVonInput) })
      : setPerson({ ...person, [e.target.name]: dataVonInput });
  }

  function addNewPerson(e) {
    e.preventDefault();
    const newArray = [...allUsers, person];
    setAllUsers(newArray);

    alert("You are registered!");
  }

  console.log(person);
  console.log(allUsers);

  return (
    <div>
      <div class="login-wrap">
        <div class="login-html">
          <Singinsignupbuttons />
          <div class="login-form">
            <div class="sign-in-htm">
              <form onSubmit={addNewPerson}>
                <div class="sign-up-htm">
                  <div class="group">
                    <label for="user" class="label">
                      Username
                    </label>
                    <input
                      onChange={inputChange}
                      name="name"
                      id="name2"
                      type="text"
                      class="input"
                      required
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Password
                    </label>
                    <input
                      name="password"
                      onChange={inputChange}
                      id="pass2"
                      type="password"
                      class="input"
                      data-type="password"
                      required
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Repeat Password
                    </label>
                    <input
                      id="repeatpass2"
                      type="password"
                      class="input"
                      data-type="password"
                      required
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Email Address
                    </label>
                    <input
                      onChange={inputChange}
                      name="email"
                      id="email"
                      type="text"
                      class="input"
                      required
                    />
                  </div>
                  <div class="group">
                    <input type="submit" class="button" value="Sign Up" />
                  </div>
                  <div class="hr"></div>
                  <div class="foot-lnk">
                    <label for="tab-1">Already Member?</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterTemplate;
