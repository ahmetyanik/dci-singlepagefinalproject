import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataStore from "./DataStore";
import Logo from "../images/logo.png";
import "../App.css";

function Header() {
  const {
    currentUser,
    setCurrentUser,
    warenkorbState,
    warenkorbDispatch,
    merkListState,
    merkListDispatch,
    searchState,
    setSearchState,
    searchedBook,
    categories,
    setCategories
  } = useContext(DataStore);

  console.log(categories);

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
          3G im Bücherhaus
        </span>
      </div>

      {/* Red Area of Header */}

      <div
        className="color-red d-none d-sm-none d-md-block d-md-flex justify-content-md-between d-lg-flex justify-content-lg-around align-items-center px-1"
        style={{ display: "flex", height: "40px"}}
      >
        <div className="text-light">
          <span>Bücherhaus</span>
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
                <li className="nav-item dropdown ms-lg-4 me-lg-4">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kategorie
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {categories.map((cate, index) => {
                      return (
                        <Link key={index} to={`/categorie/${cate}`}>
                          <li>
                            <div className="dropdown-item" href="#">
                              {cate}
                            </div>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>

                <Link
                  to={`/shoppingCart/${
                    currentUser.name === undefined
                      ? "Gast User"
                      : currentUser.name
                  }`}
                >
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    Warenkorb
                    <i className="fas fa-shopping-cart ms-1"></i>
                    </a>
                  </li>
                </Link>

              </ul>
              <div className="d-flex flex-column align-items-lg-end">
                {/* Merk List und Mein Konto */}
                <div className="d-flex">
                  {/* Merk List */}
                  <Link
                    className="d-flex align-items-center py-3 "
                    style={{ textDecoration: "none" }}
                    to={`/merklist/${currentUser.name}`}
                  >
                    <span
                      className="d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center flex-lg-row"
                      style={{ color: "#de030e" }}
                    >
                      <span className="mx-4 ">
                        <i className="far fa-heart text-danger mx-3 "></i>
                        <span>
                          Merk List{" "}
                          {merkListState.length > 0 ? (
                            <span className="badge rounded-pill bg-success">
                              {merkListState.length}
                            </span>
                          ) : null}{" "}
                        </span>
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
                      style={{ color: "#D90416" }}
                    >
                      {currentUser.name ? (
                        <Link
                          to={`/user/${currentUser.id}/${currentUser.name}`}
                        >
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
                            <span style={{ color: "#D90416" }}>
                              {" "}
                              {currentUser.name}{" "}
                              <span className="badge rounded-pill bg-success">
                                {warenkorbState.length}
                              </span>{" "}
                            </span>
                          </Link>
                        ) : (
                          <span>
                            Mein Konto{" "}
                            {warenkorbState.length > 0 ? (
                              <span className="badge rounded-pill bg-success">
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

                <form
                  className="d-flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    onChange={(e) => setSearchState(e.target.value)}
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <Link to={`/search/${searchState}`} className="d-flex">
                    <button className="btn btn-outline-danger" type="submit">
                      Search
                    </button>
                  </Link>
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
