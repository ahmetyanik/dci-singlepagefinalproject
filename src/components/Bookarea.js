import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataStore from "./DataStore";

function Bookarea() {
  const params = useParams();
  const {
    allBooks,
    setAllBooks,
    currentUser,
    setCurrentUser,
    warenkorbState,
    warenkorbDispatch,
    merkListDispatch,
  } = useContext(DataStore);

  const [singleBook, setSingleBook] = useState({});

  const filteredBook = allBooks.filter((book) => {
    return params.ISBN === book["ISBN/GTIN"] && params.bookName === book.titel;
  });

  useEffect(() => {
    setSingleBook(filteredBook[0]);
  }, []);

  console.log(currentUser);

  function addComment(e) {
    e.preventDefault();

    const commentArea = document.querySelector("#textArea");
    const gettingComment = commentArea.value;

    const commentObject ={
      name : currentUser.name,
      image: currentUser.image,
      comment:gettingComment,
      date : new Date().toDateString()
    }

    const array = [...allBooks];
    let findingIndex;

    allBooks.forEach((book, index) => {
      if (params.ISBN === book["ISBN/GTIN"] && params.bookName === book.titel) {
        findingIndex = index;
      }
    });

    const findingBook = array[findingIndex];

    findingBook.comments ? findingBook.comments.unshift(commentObject) : findingBook.comments = [commentObject];


    array.splice(findingIndex,1,findingBook)

    console.log("array:",array);

    setAllBooks(array);

    commentArea.value = "";


  }

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
              <i
                onClick={() => {
                  merkListDispatch({
                    type: "add_merk_book",
                    payload: { singleBook: singleBook },
                  });
                }}
                className="far fa-heart fs-3 pb-1 me-4 text-dark cursor"
              ></i>

              <a href="like">
                <i className="fas fa-share-alt fs-3 pb-1 me-4 text-dark"></i>
              </a>
            </div>
            <div>
              <button
                onClick={() => {
                  warenkorbDispatch({
                    type: "add",
                    payload: { singleBook: singleBook },
                  });
                }}
                href="#"
                className="btn btn-danger mt-3 color-red "
              >
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
          <p className="fw-lighter pe-lg-5 lh-base text-justify">
            {singleBook.beschreibung}
          </p>
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
            <span className="fw-lighter">Erstverkaufstag</span>{" "}
            <span>{singleBook.Erstverkaufstag}</span>
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

      <section>
        <div class="container my-5 py-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 col-lg-10 col-xl-8">
              <h3>Ihre Bewertungen</h3>
              <div class="card">
                <h5>Comments</h5>
                <div class="card-body">
                  {singleBook.comments
                    ? singleBook.comments.map((comment, index) => {
                        return (
                          <div className="border shadow p-3 mt-2 text-start">
                            <div class="d-flex flex-start align-items-center">
                              <img
                                class="rounded-circle shadow-1-strong me-3"
                                src={comment.image}
                                alt="avatar"
                                width="60"
                                height="60"
                              />
                              <div>
                                <h6 class="fw-bold text-primary ">
                                  {comment.name}
                                </h6>
                                <p class="text-muted small mb-0">
                                  {comment.date}
                                </p>
                              </div>
                            </div>

                            <p class="mt-3 ">{comment.comment}</p>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div
                  class="card-footer py-3 border-0"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  {currentUser.name ? (
                    <div>
                      <form onSubmit={addComment}>
                        <div class="d-flex flex-start w-100">
                          <img
                            class="rounded-circle shadow-1-strong me-3"
                            src={currentUser.image}
                            alt="avatar"
                            width="40"
                            height="40"
                          />

                          <div class="form-outline w-100">
                            <textarea
                              placeholder="Write your comment here!"
                              class="form-control"
                              id="textArea"
                              rows="4"
                              style={{ background: " #fff" }}
                            ></textarea>
                          </div>
                        </div>
                        <div class="float-end mt-2 pt-1">
                          <button type="submit" class="btn btn-primary btn-sm">
                            Post comment
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bookarea;
