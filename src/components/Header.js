import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataStore from "./DataStore";
import Logo from "../images/logo.png";
import "../App.css"

function Header() {
  const { currentUser, setCurrentUser, warenkorbState, warenkorbDispatch, merkListState, merkListDispatch} =
    useContext(DataStore);

  console.log(currentUser);

  return (
    <div>
      {/*  Grey Area of Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          backgroundColor: "#cccccc",
        }}
      >
        <span style={{ color: "#c42b32", fontWeight: "bold" }}>
          3G im KulturKaufhaus
        </span>
      </div>

      {/* Red Area of Header */}

      <div
        className="d-none d-sm-none d-md-block d-md-flex justify-content-md-between d-lg-flex justify-content-lg-around align-items-center px-1"
        style={{ display: "flex", height: "40px", backgroundColor: "#de030e" }}
      >
        <div className="text-light">
          <span>KulturKaufhaus</span>
          <span className="px-2">|</span>
          <span>Veranstellungen</span>
          <span className="px-2">|</span>
          <span>Magazin</span>
        </div>
        <div className="text-light">
          <span>
            {" "}
            <i className="fas fa-mobile-alt px-2"></i>030 20 25 11 11
          </span>
          <span className="px-2">|</span>
          <span>
            <i className="fas fa-info-circle px-2"></i>Service
          </span>
        </div>
      </div>

      {/* Navbar Area of Header */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/">
              {" "}
              <a className="navbar-brand" href="#">
                <img src={Logo} className="logo" />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                
                <Link to={`/shoppingCart/${currentUser.name === undefined ? "Gast User" : currentUser.name}`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Shopping Cart
                    </a>
                  </li>
                </Link>

                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <div className="d-flex flex-column align-items-lg-end">
                {/* Merk List und Mein Konto */}
              <div className="d-flex">
                {/* Merk List */}
                <Link
                  className="py-3 "
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                >
                  <span
                    className="d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center flex-lg-row"
                    style={{ color: "#de030e" }}
                  >
                    {currentUser.name ? null : (
                      <i className="far fa-heart text-danger px-1"></i>
                    )}

                    <span className="mx-2" >
                      {currentUser.name ? (
                        <Link
                          to={`/user/${currentUser.id}/${currentUser.name}/merklist`}
                        >
                          {" "}
                          <span  style={{ color: "#de030e" }}>
                            {" "}
                            Merk List{" "}
                            <span class="badge rounded-pill bg-success">
                              {merkListState.length}
                            </span>{" "}
                          </span>
                        </Link>
                      ) : (
                        <span>
                          Merk List{" "}
                          {merkListState.length > 0 ? (
                            <span class="badge rounded-pill bg-success">
                              {merkListState.length}
                            </span>
                          ) : null}{" "}
                        </span>
                      )}
                    </span>
                  </span>

                </Link>
                {/* Merk List endet */}

                {/* Mein Konto */}
                <Link
                  className="py-3 "
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                >
                  <span
                    className="d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center flex-lg-row"
                    style={{ color: "#de030e" }}
                  >
                    {currentUser.name ? (
                      <Link to={`/user/${currentUser.id}/${currentUser.name}`}>
                        {" "}
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                          src={currentUser.image}
                          alt=""
                        />{" "}
                      </Link>
                    ) : (
                      <i className="far fa-user text-danger px-2"></i>
                    )}

                    <span className="mx-2">
                      {currentUser.name ? (
                        <Link
                          to={`/user/${currentUser.id}/${currentUser.name}`}
                        >
                          {" "}
                          <span style={{ color: "#de030e" }}>
                            {" "}
                            {currentUser.name}{" "}
                            <span class="badge rounded-pill bg-success">
                              {warenkorbState.length}
                            </span>{" "}
                          </span>
                        </Link>
                      ) : (
                        <span>
                          Mein Konto{" "}
                          {warenkorbState.length > 0 ? (
                            <span class="badge rounded-pill bg-success">
                              {warenkorbState.length}
                            </span>
                          ) : null}{" "}
                        </span>
                      )}
                    </span>
                    <span className="mx-2">
                      {currentUser.name ? "|" : null}
                    </span>
                    <span onClick={() => setCurrentUser({})} className="mx-2">
                      {currentUser.name ? "Log Out" : null}
                    </span>
                  </span>                  
                </Link>
                {/* Mein Konto endet */}
                </div>
                {/*MerkList und Mein Konto endet */}
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-danger" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
