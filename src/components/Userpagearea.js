import React, { useContext, useEffect, useState } from "react";
import DataStore from "./DataStore";

function Userpagearea() {
  const { allUsers, setAllUsers, currentUser, setCurrentUser } =
    useContext(DataStore);

  const [userPageCurrentUser, setUserPageCurrentUser] = useState({});

  useEffect(() => {
    setUserPageCurrentUser(currentUser);
  }, []);

  console.log(userPageCurrentUser);

  const changeForm = document.querySelector("#changeForm");

  function changeUserInfos() {
    changeForm.setAttribute("class", "d-block m-2");
  }

  function inputChange(e) {
    e.preventDefault();

    let dataVonInput = e.target.value;

    setUserPageCurrentUser({
      ...userPageCurrentUser,
      [e.target.name]: dataVonInput,
    });
  }

  console.log(userPageCurrentUser);

  function changeCurrentUserInfos(e) {
    e.preventDefault();
    setCurrentUser(userPageCurrentUser);
    changeForm.setAttribute("class", "d-none");
  }

  return (
    <div>
    <div className="bg-danger">
      <h1 className="text-light">{currentUser.name}</h1>
    </div>
      <div className="row" style={{ minHeight: "70vh" }}>
        <div className="col-sm-12 col-lg-6 d-lg-flex flex-lg-column flex-lg-row p-lg-3 border shadow">
          <h3 style={{fontWeight:"bold"}}>General Information</h3>
          <div>
            <img
              className="mx-lg-5"
              style={{ width: "200px" }}
              src={currentUser.image}
              alt=""
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-start p-sm-2 border shadow m-2">
              <div className="m-1">Name: {currentUser.name}</div>
              <div className="m-1">User Id: {currentUser.id}</div>
              <div className="m-1">E-Mail: {currentUser.email}</div>
              <div className="m-1">
                Credit Card Number: {currentUser.creditCard} | Exp. Date:{" "}
                {currentUser.expirationDateOfCard}
              </div>
              <div className="m-1">Address: {currentUser.address}</div>
            </div>
          </div>
          <div>
          <button style={{maxWidth:"300px"}} onClick={changeUserInfos} className="btn btn-danger">
            Change My Information
          </button>
          </div>
      <div className="d-flex justify-content-center">
          <div style={{width:"450px"}}  className="d-none" id="changeForm">
            <form
              onSubmit={changeCurrentUserInfos}
              className="d-flex flex-column"
            >
              <input
                onChange={inputChange}
                id="input-image"
                name="image"
                className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
                type="text"
                placeholder="Image URL"
              />
              <input
                onChange={inputChange}
                id="creditCard"
                name="creditCard"
                className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
                type="text"
                placeholder="Credit Card Number"
              />
              <input
                onChange={inputChange}
                id="creditCardDate"
                name="expirationDateOfCard"
                className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
                type="date"
                placeholder="Credit Card Date"
              />
              <input
                onChange={inputChange}
                id="address"
                name="address"
                className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
                type="text"
                placeholder="Address"
              />
              <button className="btn btn-success">CHANGE IMAGE</button>
            </form>
          </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 d-lg-flex flex-column flex-lg-row p-lg-3 border shadow">
        <h3 style={{fontWeight:"bold"}}>Activities</h3>

        </div>
      </div>
    </div>
  );
}

export default Userpagearea;
