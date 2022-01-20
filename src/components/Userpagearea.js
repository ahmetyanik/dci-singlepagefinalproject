import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataStore from "./DataStore";

function Userpagearea() {
  const {
    allUsers,
    setAllUsers,
    currentUser,
    setCurrentUser,
    warenkorbState,
    warenkorbDispatch,
  } = useContext(DataStore);

  const array = [];

  const [userPageCurrentUser, setUserPageCurrentUser] = useState({});

  const [selectedUser, setSelectedUser] = useState({});

  let selectedPerson = allUsers.filter((user,index)=>{

    return user.name === currentUser.name;
  })

  console.log(selectedPerson);

  useEffect(()=>{
    setSelectedUser(selectedPerson[0])
  },[])

  useEffect(() => {
    setUserPageCurrentUser(currentUser);
  }, []);
  
  console.log(selectedUser);

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


  function changeCurrentUserInfos(e) {
    e.preventDefault();
    setCurrentUser(userPageCurrentUser);
    changeForm.setAttribute("class", "d-none");
  }

  console.log(allUsers);
  console.log(currentUser);



  return (
    <div>
      <div className="bg-danger">
        <h1 className="text-light">{currentUser.name}</h1>
      </div>
      <div className="row" style={{ minHeight: "70vh" }}>
        <div className="col-sm-12 col-lg-6 d-lg-flex flex-lg-column flex-lg-row p-lg-3 border shadow">
          <h3 style={{ fontWeight: "bold" }}>General Information</h3>
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
            <button
              style={{ maxWidth: "300px" }}
              onClick={changeUserInfos}
              className="btn btn-danger"
            >
              Change My Information
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ width: "450px" }} className="d-none" id="changeForm">
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
        <div className="col-sm-12 col-lg-6 d-lg-flex flex-column flex-lg-column p-lg-3 border shadow">
          <h3 style={{ fontWeight: "bold" }}>Activities</h3>
          <hr/>
          <h5>Purchased Books</h5>

          {selectedUser.name ? selectedUser.purchasedBooks.map((book, index) => {

              console.log(book)

            if (!array.includes(book)) {
              array.push(book);

              const filteredBook = warenkorbState.filter((element) => {
                return book.titel === element.titel;
              });

              return (
                <div
                  key={index}
                  class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded border shadow"
                >
                  <div class="mr-1">
                    <Link to={`/book/${book["ISBN/GTIN"]}/${book.titel}`}>
                      {" "}
                      <img class="rounded" src={book.image} width="70" alt="" />
                    </Link>
                  </div>
                  <div class="d-flex flex-column align-items-center product-details">
                    <span class="font-weight-bold">{book.titel}</span>
                    <div class="d-flex flex-row product-desc">
                      <div class="size mr-1">
                        <span class="text-grey">
                          {book.autor} | {book.Verlag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center qty">
                    <h5 class="text-grey mt-1 mr-1 ml-1">
                      {filteredBook.length}
                    </h5>
                    <span className="text-muted mx-1">X</span>
                  </div>
                  <div>
                    <h5 class="text-grey">{book.preis}€</h5>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="text-grey">
                      {parseFloat(
                        parseFloat(book.preis) * parseFloat(filteredBook.length)
                      ).toFixed(2)}{" "}
                      €
                    </span>
                  </div>
                </div>
              );
            } 
          }) : console.log(selectedUser)}

        </div>
      </div>
    </div>
  );
}

export default Userpagearea;
