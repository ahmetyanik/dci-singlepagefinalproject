import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import books from "../datenbank/books";
import "../shoppingCard.css";
import Bookarea from "./Bookarea";
import DataStore from "./DataStore";

function ShoppingCartArea() {
  const {
    currentUser,
    setCurrentUser,
    warenkorbState,
    warenkorbDispatch,
    allUsers,
    setAllUsers,
  } = useContext(DataStore);

  const array = [];

  let totalPreis = 0;

  warenkorbState.forEach((book) => {
    return (totalPreis += parseFloat(book.preis));
  });

  function buyingBuch() {
    if (currentUser.name) {
      allUsers.forEach((user, index) => {
        if (user.name === currentUser.name) {
          const array = [...allUsers];

          const newObject = { ...array[index], purchasedBooks: warenkorbState };

          array.splice(index, 1, newObject);

          setAllUsers(array);
          setCurrentUser({...currentUser,purchasedBooks: warenkorbState})
        }
      });
    }
  }

  console.log(currentUser);

  return (
    <div style={{ minHeight: "50vh" }}>
      <div class="container pt-3 pb-5 mt-5 mb-5 border shadow">
        <div class="d-flex justify-content-center row">
          {warenkorbState.length == 0 ? (
            <div>
              <h3 className="m-5">Dein Einkaufskorb ist leer.</h3>
            </div>
          ) : (
            <div class="col-md-8">
              <div class="p-2"></div>

              {warenkorbState.map((book, index) => {
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
                          <img
                            class="rounded"
                            src={book.image}
                            width="70"
                            alt=""
                          />
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
                        <i
                          onClick={() => {
                            console.log(book);
                            warenkorbDispatch({
                              type: "remove",
                              payload: { singleBook: book },
                            });
                          }}
                          style={{
                            fontSize: "20px",
                            color: "red",
                            marginRight: "5px",
                          }}
                          class="fas fa-minus-square"
                        ></i>
                        <h5 class="text-grey mt-1 mr-1 ml-1">
                          {filteredBook.length}
                        </h5>
                        <i
                          style={{
                            fontSize: "20px",
                            color: "green",
                            marginLeft: "5px",
                          }}
                          onClick={() => {
                            console.log(book);
                            warenkorbDispatch({
                              type: "add",
                              payload: { singleBook: book },
                            });
                          }}
                          class="fas fa-cart-plus"
                        ></i>
                      </div>
                      <div>
                        <h5 class="text-grey">{book.preis}€</h5>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="text-grey">
                          {parseFloat(
                            parseFloat(book.preis) *
                              parseFloat(filteredBook.length)
                          ).toFixed(2)}{" "}
                          €
                        </span>
                      </div>
                    </div>
                  );
                }
              })}

              {warenkorbState.length > 0 ? (
                <div>
                  <span className="d-flex flex-column align-items-end mt-3">
                    <h3>Total</h3>

                    <h4>{totalPreis.toFixed(2)} €</h4>
                  </span>

                  <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                    <button
                      onClick={buyingBuch}
                      class="btn btn-warning btn-block btn-lg ml-2 pay-button"
                      type="button"
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              ) : (
                <div>Es gibt keine Bücher in Ihre Warenkorb!</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartArea;
