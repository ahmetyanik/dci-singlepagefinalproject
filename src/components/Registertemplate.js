import React, { useContext, useState } from "react";
import DataStore from "./DataStore";
import Singinsignupbuttons from "./Signinsignupbutton";
import { useNavigate } from "react-router-dom";
import users from "../datenbank/users";

function RegisterTemplate() {
  const { allUsers, setAllUsers, currentUser, setCurrentUser } = useContext(DataStore);
  let navigate = useNavigate();
  

  /* Register */



  const [person, setPerson] = useState({
    id: allUsers.length + 1,
    name: "",
    email: "",
    password: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU",
    active: false,
    admin: false,
    purchasedBooks:[]
  });

  function inputChange(e) {
    let dataVonInput = e.target.value;

    e.target.name === "password"
      ? setPerson({ ...person, [e.target.name]: parseInt(dataVonInput) })
      : setPerson({ ...person, [e.target.name]: dataVonInput });
  }


  function addNewPerson(e) {
    e.preventDefault();
    users.push(person);
    setCurrentUser(person);
    navigate("/");
    alert("You are registered!");
  }


  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <Singinsignupbuttons />
          <div className="login-form">
            <div className="sign-in-htm">
              <form onSubmit={addNewPerson}>
                <div className="sign-up-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input
                      onChange={inputChange}
                      name="name"
                      id="name2"
                      type="text"
                      className="input"
                      required
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      name="password"
                      onChange={inputChange}
                      id="pass2"
                      type="password"
                      className="input"
                      data-type="password"
                      required
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Repeat Password
                    </label>
                    <input
                      id="repeatpass2"
                      type="password"
                      className="input"
                      data-type="password"
                      required
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Email Address
                    </label>
                    <input
                      onChange={inputChange}
                      name="email"
                      id="email"
                      type="text"
                      className="input"
                      required
                    />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
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
