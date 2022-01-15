import React, { useContext } from "react";
import DataStore from "./DataStore";

function Userpagearea() {
  const { currentUser, setCurrentUser } = useContext(DataStore);

  return (
    <div>
      <h1 className="text-dark">{currentUser.name}</h1>
      <div className="row" style={{ minHeight: "70vh" }}>
        <div style={{height:"200px"}} className="col-sm-12 col-lg-6 d-lg-flex flex-column flex-lg-row p-lg-3 border shadow">
          <img className="mx-lg-5" style={{ width: "200px" }} src={currentUser.image} alt="" />
          <div className="d-flex flex-column align-items-start" >
        <div>Name: {currentUser.name}</div>
        <div>User Id: {currentUser.id}</div>
        <div>E-Mail: {currentUser.email}</div>
        <div>Credit Card: {currentUser.creditCard}</div>
        <div>Address: {currentUser.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpagearea;
