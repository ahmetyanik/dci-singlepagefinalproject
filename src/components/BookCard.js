import React from "react";
import foto from "./Dune-Haus-Atreides-Graphic-Novel.-Band-1.jpg";

function BookCard() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={foto} alt="Card image cap" />
        <div className="card-body text-dark">
          <h5 className="card-title">Dune: Haus Atreides</h5>
          <p className="card-text ">
            <span>Herbart, Brain</span> | <span>Andereas</span>
          </p>
          <div className="d-flex justify-content-between">
            <span>
              <i className="fas fa-book"></i>
            </span>
            <span className="font-weight-bold">EUR 19,90</span>
          </div>
          <div className="d-flex align-items-end">
            <div>
              <a href="like">
                <i class="far fa-heart fs-3 pb-1 me-4 text-dark"></i>
              </a>
            </div>
            <div>
              {" "}
              <button href="#" class="btn btn-danger mt-3 ">
                <i className="fas fa-shopping-cart me-3"></i>
                WARENKORB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
