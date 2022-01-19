import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataStore from "./DataStore";

function BookCard({ book, index }) {


  const { warenkorbState,warenkorbDispatch } = useContext(DataStore);

  return (
    <div className="card m-3 shadow d-flex align-items-center">
      <Link to={`/book/${book["ISBN/GTIN"]}/${book.titel}`}>
        <div>
          <div            
            key={index}
            style={{ width: "18rem" }}
          >
            
            <img
              className="card-img-top p-1"
              style={{ height: "25rem" }}
              src={book.image}
              alt="Card cap"
            />
            <div className="card-body ">
              <div className="book-div d-flex justify-content-center align-items-center" style={{ height: "2rem"}}>
                <h5 className="card-title">{book.titel}</h5>
              </div>
              
              <p className="card-text">
                <span>{book.autor}</span> <span></span>
              </p>
              <div className="d-flex justify-content-between">
                <span>
                  <i className="fas fa-book"></i>
                </span>
                <span className="font-weight-bold">EUR {book.preis}</span>
              </div>
              <div className="d-flex align-items-end justify-content-center"></div>
            </div>
          </div>
        </div>
      </Link>
          <div className="d-flex justify-content-center align-items-center">
            <div>
                <i class="far fa-heart fs-3 pb-1 me-4 text-dark"></i>
            </div>
              <button    onClick={() => {
                  console.log(book)
                  warenkorbDispatch({
                    type: "add",
                    payload: { singleBook: book },
                  });
                }} href="#" class="color-red btn btn-danger m-3 d-flex justify-content-center align-items-center">
                <i className="fas fa-shopping-cart me-3"></i>
                WARENKORB
              </button>
          </div>
    </div>
  );
}

export default BookCard;
