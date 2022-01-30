import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataStore from "./DataStore";
import "../App.css";
import alertify from "alertifyjs";

function BookCard({ book, index }) {


  const { warenkorbState,warenkorbDispatch, merkListDispatch } = useContext(DataStore);

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
                <i onClick={() => {
                  merkListDispatch({
                    type: "add_merk_book",
                    payload: { singleBook: book },
                  });
                }} class="far fa-heart fs-3 pb-1 me-4 text-dark cursor"></i>
            </div>
              <button
                  onClick={() => {
                  warenkorbDispatch({
                    type: "add",
                    payload: { singleBook: book },
                  });
                  alertify.success(
                              book.titel + " wurde hinzugefügt.",
                              1
                            );
          
                }} href="#" className="color-red btn btn-danger m-3 d-flex justify-content-center align-items-center">

                <i className="fas fa-shopping-cart me-3"></i>
                WARENKORB
              </button>
          </div>
    </div>
  );
}

export default BookCard;
