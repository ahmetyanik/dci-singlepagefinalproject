import React, { useContext } from "react";
import {Link} from "react-router-dom"
import DataStore from "./DataStore";

function BookCard() {
  const { allBooks, setAllBooks } = useContext(DataStore);
  return (
    <div>
      
        <div className="container d-flex flex-row flex-wrap justify-content-around">
          {allBooks.map((book, index) => {
            return (
              <Link to={`/book/${book["ISBN/GTIN"]}/${book.titel}`}>
              <div
                className="card m-3 shadow"
                key={index}
                style={{ width: "18rem" }}
              >
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
                    <span className="font-weight-bold">EUR {book.preis}</span>
                  </div>
                  <div className="d-flex align-items-end justify-content-center">
                    <div>
                      <a href="like">
                        <i class="far fa-heart fs-3 pb-1 me-4 text-dark"></i>
                      </a>
                    </div>
                    <div>
                      {" "}
                      <button href="#" class="btn btn-danger mt-3" style={{ backgroundColor: "#D90416" }}>
                        <i className="fas fa-shopping-cart me-3"></i>
                        WARENKORB
                      </button>
                    </div>
                  </div>

                </div>
              </div>
      </Link>
            );
          })}
        </div>
    </div>
  );
}

export default BookCard;
