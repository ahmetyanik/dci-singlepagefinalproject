import React, { useContext } from "react";
import DataStore from "./DataStore";
import { Link } from "react-router-dom";
import dog from "../images/dog.jpg"
import "../App.css"

export default function SearchTemplate() {
  const { merkListDispatch, warenkorbDispatch, searchedBook } =
    useContext(DataStore);
  return (
    <div>
      {searchedBook.length === 0 ? (
        <div className="container row-12  d-flex align-items-center justify-content-center shadow my-5" >
            <div className="col-3"><img src={dog} className="dog" alt="" /></div>
            <div className="col-5"><h2 >Ooo schade... <br /> Das Buch wurde nicht gefunden</h2></div>
            
            
        </div>
      ) : (
        <div className="container d-flex flex-row flex-wrap justify-content-around">
          {searchedBook.map((book, index) => {
            return (
              <div className="card m-3 shadow">
                <Link to={`/book/${book["ISBN/GTIN"]}/${book.titel}`}>
                  <div>
                    <div key={index} style={{ width: "18rem" }}>
                      <img
                        className="card-img-top p-1"
                        style={{ height: "20rem" }}
                        src={book.image}
                        alt="Card cap"
                      />
                      <div className="card-body ">
                        <h5 className="card-title">{book.titel}</h5>
                        <p className="card-text">
                          <span>{book.autor}</span> <span></span>
                        </p>
                        <div className="d-flex justify-content-between">
                          <span>
                            <i className="fas fa-book"></i>
                          </span>
                          <span className="font-weight-bold">
                            EUR {book.preis}
                          </span>
                        </div>
                        <div className="d-flex align-items-end justify-content-center"></div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <i
                      onClick={() => {
                        merkListDispatch({
                          type: "add_merk_book",
                          payload: { singleBook: book },
                        });
                      }}
                      class="far fa-heart fs-3 pb-1 me-4 text-dark cursor"
                    ></i>
                  </div>
                  <button
                    onClick={() => {
                      console.log(book);
                      warenkorbDispatch({
                        type: "add",
                        payload: { singleBook: book },
                      });
                    }}
                    href="#"
                    class="btn btn-danger m-3 d-flex justify-content-center align-items-center"
                  >
                    <i className="fas fa-shopping-cart me-3"></i>
                    WARENKORB
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
