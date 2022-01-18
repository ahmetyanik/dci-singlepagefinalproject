import React, { useContext } from "react";
import "../shoppingCard.css";
import DataStore from "./DataStore";

function ShoppingCartArea() {
  const { currentUser, setCurrentUser, warenkorbState, warenkorbDispatch } =
    useContext(DataStore);
  const array = [];

  console.log(warenkorbState);

  return (
    <div style={{ minHeight: "50vh" }}>
      <div class="container mt-5 mb-5 border shadow">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
            <div class="p-2">
              <h4>Shopping cart</h4>
              <div class="d-flex flex-row align-items-center pull-right">
                <span class="mr-1">Sort by:</span>
                <span class="mr-1 font-weight-bold">Price</span>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>

            {warenkorbState.map((book, index) => {
                if (!array.includes(book.titel)) {
                  array.push(book.titel);
              return (
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded border shadow">
                  <div class="mr-1">
                    <img class="rounded" src={book.image} width="70" alt="" />
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
                    <i class="fa fa-minus text-danger"></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">{2}</h5>
                    <i class="fa fa-plus text-success"></i>
                  </div>
                  <div>
                    <h5 class="text-grey">{book.preis}</h5>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="fa fa-trash mb-1 text-danger"></i>
                  </div>
                </div>
              );
                }
            })}

            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <button
                class="btn btn-warning btn-block btn-lg ml-2 pay-button"
                type="button"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartArea;
