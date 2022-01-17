import React, { useContext } from "react";
import DataStore from "./DataStore";

function Userpagearea() {
  const { allUsers, setAllUsers, currentUser, setCurrentUser } =
    useContext(DataStore);

    console.log(allUsers);

  function changeFoto(e) {
    e.preventDefault();
    const imageInput = document.querySelector("#input-image");
    const imageURL = imageInput.value;
    const newArray = [...allUsers];

    console.log(newArray);
    console.log(currentUser);

    newArray[currentUser.image] = imageURL;

    setAllUsers(newArray);
    setCurrentUser({
      ...currentUser,
      image: imageURL,
    });

  }

  console.log(allUsers);

  

  return (
    <div>
      <h1 className="text-dark">{currentUser.name}</h1>
      <div className="row" style={{ minHeight: "70vh" }}>
        <div className="col-sm-12 col-lg-6 d-lg-flex flex-column flex-lg-row p-lg-3 border shadow">
          <div>
            <img
              className="mx-lg-5"
              style={{ width: "200px" }}
              src={currentUser.image}
              alt=""
            />
          </div>
          <div>
            <div className="d-flex flex-column align-items-start p-sm-2 ">
              <div>Name: {currentUser.name}</div>
              <div>User Id: {currentUser.id}</div>
              <div>E-Mail: {currentUser.email}</div>
              <div>Credit Card: {currentUser.creditCard}</div>
              <div>Address: {currentUser.address}</div>
            </div>
            <button className="btn btn-danger">Change My Information</button>
            <div>
              <form onSubmit={changeFoto}>                
                <input
                  id="input-image"
                  name="name"
                  className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
                  type="text"
                  placeholder="Image URL"
                />
                <button>CHANGE IMAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpagearea;
