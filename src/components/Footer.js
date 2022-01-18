import React from 'react'

function Footer() {
    return (
       /*  <!-- Remove the container if you want to extend the Footer to full width. --> */
        <div className="container-fluid p-0 ">
         {/*  <!-- Footer --> */}
          <footer
                  className="text-center text-lg-start text-dark"
                  style={{backgroundColor: '#ECEFF1'}}
                  >
            {/* <!-- Section: Social media --> */}
            <section
                     className="d-flex justify-content-between p-4 text-white"
                     style={{backgroundColor: "#D90416"}}
                     >
              {/* <!-- Left --> */}
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* <!-- Left --> */}
        
              {/* <!-- Right --> */}
              <div >
                <a href="" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              {/* <!-- Right --> */}
            </section>
           {/*  <!-- Section: Social media --> */}
        
            {/* <!-- Section: Links  --> */}
            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                  {/* <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                   {/*  <!-- Content --> */}
                    <h6 className="text-uppercase fw-bold">Bookstore</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width:"60px", backgroundColor: "#7c4dff", height: "2px"}}
                        />
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>
                 {/*  <!-- Grid column --> */}
        
                  {/* <!-- Grid column --> */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                        />
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">MDBootstrap</a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">MDWordPress</a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">BrandFlow</a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">Bootstrap Angular</a>
                    </p>
                  </div>
                 {/*  <!-- Grid column --> */}
        
                 {/*  <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                   {/*  <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", backgroundColor: "#7c4dff", height:"2px"}}
                        />
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">Your Account</a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">Become an Affiliate</a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">Shipping Rates</a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark text-decoration-none">Help</a>
                    </p>
                  </div>
                 {/*  <!-- Grid column --> */}
        
                 {/*  <!-- Grid column --> */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                   {/*  <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                        />
                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
               {/*  <!-- Grid row --> */}
              </div>
            </section>
            {/* <!-- Section: Links  --> */}
        
            {/* <!-- Copyright --> */}
            <div
                 className="text-center p-3 text-white"
                 style={{backgroundColor: "#D90416"}}
                 >
              © 2020 Copyright:
              <a className='text-white text-decoration-none' href="https://mdbootstrap.com/"
                 >MDBootstrap.com</a
                >
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
    )
}

export default Footer
