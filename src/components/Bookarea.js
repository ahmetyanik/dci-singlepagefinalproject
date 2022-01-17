import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataStore from "./DataStore";

function Bookarea() {
  const params = useParams();
  const { allBooks, setAllBooks } = useContext(DataStore);

  const [singleBook, setSingleBook] = useState({});

  console.log(params);

  const filteredBook = allBooks.filter((book) => {
    return params.ISBN === book["ISBN/GTIN"] && params.bookName === book.titel;
  });

  useEffect(() => {
    setSingleBook(filteredBook[0]);
  }, []);

  return (
    <div className="container bg-white mt-5 mb-5">
      <div className="row">
        <div
          className="col-lg-3 shadow p-0 m-auto"
          style={{ height: "325px", width: "275px" }}
        >
          <img
            src={singleBook.image}
            alt=""
            style={{ height: "325px", width: "275px" }}
          />
        </div>
        <div className="col-lg-5 p-4">
          <h1>{singleBook.titel}</h1>
          <h4>{singleBook.autor}</h4>
        </div>
        <div className="col-lg-4 text-start text-lg-end">
          <h1>EUR 10,50</h1>
          <div className="d-flex align-items-end justify-content-lg-end">
            <div>
              <a href="like">
                <i className="far fa-heart fs-3 pb-1 me-4 text-dark"></i>
              </a>
              <a href="like">
                <i className="fas fa-share-alt fs-3 pb-1 me-4 text-dark"></i>
              </a>
            </div>
            <div>
              <button href="#" className="btn btn-danger mt-3 ">
                <i className="fas fa-shopping-cart me-3"></i>
                WARENKORB
              </button>
            </div>
          </div>

          <div className="text-start text-lg-end mt-4 ">
            <p className="m-1">Sofort versandbereit 🟢</p>
            <p className="m-1">Abholbereit: in wenigen Stunden 🟢</p>
            <p className="m-1">
              <span className="fw-bolder">Anzahl:</span> 100{" "}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <h2 className="text-start my-4"> Produktbeschreibung</h2>
        <div className="col-lg-9 text-start">
          <p className="fw-lighter pe-lg-5 lh-base text-justify">{singleBook.beschreibung}</p>
        </div>
        <div className="col-lg-3 text-start">
          <h4>Details</h4>
          <hr />
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">ISBN/GTIN</span>{" "}
            <span className="d-inline-block">
              {" "}
              <span>{singleBook["ISBN/GTIN"]}</span>{" "}
            </span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Produktart</span>{" "}
            <span className="d-inline-block">{singleBook.Produktart}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Einbandart</span>{" "}
            <span>{singleBook.Einbandart}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Verlag</span>{" "}
            <span>{singleBook.Verlag}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Erscheinungsjahr</span>{" "}
            <span>{singleBook.Erscheinungsjahr}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Erscheinungsdatum</span>{" "}
            <span>{singleBook.Erscheinungsdatum}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Seiten</span>{" "}
            <span>{singleBook.seiten}</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Sprache</span>{" "}
            <span>{singleBook.sprache}</span>
          </p>
        </div>
      </div>

      

    </div>
  );
}

export default Bookarea;
