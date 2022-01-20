import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../shoppingCard.css";
import DataStore from "./DataStore";

function MerkListTemplate() {
  const { currentUser, setCurrentUser, merkListState, merkListDispatch, warenkorbDispatch } =
    useContext(DataStore);
  const array = [];
  let totalPreis = 0;

  console.log(merkListState);

  return (
    <div style={{ minHeight: "50vh" }}>
      <div class="container pt-3 pb-5 mt-5 mb-5 border shadow">
        <div class="d-flex justify-content-center row">
          <div class="col-md-8">
            <div class="p-2">
              <h4>Merk Liste</h4>
              
            </div>

            {merkListState.map((book, index) => {
              if (!array.includes(book.titel)) {
                array.push(book.titel);

                const filteredBook = merkListState.filter((element, index) => {
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
                   
                    <div>
                      <h5 class="text-grey">{book.preis}</h5>
                    </div>
                    <div >
              <button
                onClick={() => {
                  warenkorbDispatch({
                    type: "add",
                    payload: { singleBook: book },
                  });
                }}
                href="#"
                className="btn btn-danger mt-3 "
              >
                <i className="fas fa-shopping-cart me-3"></i>
                WARENKORB
              </button>
            </div>
                    <div class="d-flex flex-row align-items-center qty">
                      <i
                        onClick={() => {
                          console.log(book);
                          merkListDispatch({
                            type: "remove_merklist",
                            payload: { singleBook: book },
                          });
                        }}
                        style={{
                          fontSize: "20px",
                          color: "red",
                          marginRight: "5px",
                        }}
                        class="far fa-trash-alt"
                      ></i>
                      
                     
                    </div>
                   
                   
                  </div>
                );
              }
            })}


           
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerkListTemplate;
