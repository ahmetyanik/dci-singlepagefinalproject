import React from "react";

function BookPage() {
  return (
    <div className="container bg-white mt-5">
      <div className="row">
        <div className="col-3">
          <img src="" alt="" />
        </div>
        <div className="col-6">
          <h1>Here's To Us</h1>
          <h4>Adam Silvera</h4>
        </div>
        <div className="col-3 text-start">
          <h1>EUR 10,50</h1>
          <div className="d-flex align-items-end justify-content-start">
            <div >
              <a href="like">
                <i class="far fa-heart fs-3 pb-1 me-4 text-dark"></i>
              </a>
              <a href="like">
                <i class="fas fa-share-alt fs-3 pb-1 me-4 text-dark"></i>
              </a>
            </div>
            <div>
              <button href="#" class="btn btn-danger mt-3 ">
                <i className="fas fa-shopping-cart me-3"></i>
                WARENKORB
              </button>
            </div>
          </div>

          <div className="text-start mt-4 ">
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
        <div className="col-9 text-start">
          <p className="fw-lighter pe-5 lh-base">
            In the follow-up to their charming NEW YORK TIMES BESTSELLER, What
            If It's Us, best friends Adam Silvera (They Both Die At The End) and
            Becky Albertalli (Simon vs. The Homo Sapiens Agenda) reunite to give
            Arthur and Ben another shot at true love. From the creator of 13
            Reasons Why, What If It's Us is soon to be a feature film! Ben has
            spent his first year of college working on his fantasy manuscript
            with his writing partner Mario, who is a great Spanish tutor, and an
            even better kisser. So why can't he stop thinking about the fact
            that Arthur's back in town two years after they called it quits?
            Arthur is in New York for a dream internship on Broadway, with a
            boyfriend back at home that he couldn't be happier with. But when he
            comes upon Ben cuddled up with a mystery boy, he starts to wonder if
            his feelings for Ben ever truly went away. Even as the boys try to
            focus on their futures, they can't seem to help running into each
            other in the present. Is the universe forcing them to question if
            they're actually meant to be? Possibly not. After all, things didn't
            work the first time around. Possibly yes. After all, the sparks are
            still flying. Sometimes you just have to take a leap of faith and
            raise a glass. Here's to celebrating old friends! Here's to
            embracing new beginnings! Here's to believing in second chances!
            PRAISE FOR WHAT IF IT'S US: 'Romantic, realistic and sweet, this
            perfectly captures New York, teenage love and life in that gray area
            when you're not quite an adult and not quite a child either.' Lauren
            James, author of The Loneliest Girl in the Universe PRAISE FOR ADAM
            SILVERA: 'A phenomenal talent.' Juno Dawson, author of Clean and
            Wonderland PRAISE FOR BECKY ALBERTALLI: 'The love child of John
            Green and Rainbow Rowell.' Teen Vogue Zusammenfassung In the
            follow-up to their NEW YORK TIMES BESTSELLER, What If It's Us, best
            friends Adam Silvera and Becky Albertalli reunite to give Arthur and
            Ben another shot at true love.
          </p>
        </div>
        <div className=" col-3 text-start">
          <h4>Details</h4>
          <hr />
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">ISBN/GTIN</span> <span className="d-inline-block"> <span >978-1-398-50520-9</span> </span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Produktart</span> <span className="d-inline-block">Taschenbuch </span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Einbandart</span> <span>Kartoniert, Paperback</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Verlag</span> <span>Simon & Schuster UK</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Erscheinungsjahr</span> <span>2021</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Erscheinungsdatum</span> <span>28.12.2021</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Seiten</span> <span>480 Seiten</span>
          </p>
          <p className="d-flex justify-content-between">
            <span className="fw-lighter">Sprache</span> <span>Englisch</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
