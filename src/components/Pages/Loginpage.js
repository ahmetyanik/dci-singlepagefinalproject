import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Logintemplate from "../Logintemplate";

function Loginpage({ allUsers,setCurrentUser }) {



  return (
    <div>
      <Header />
      <div className="my-5">
        <Logintemplate allUsers={allUsers} setCurrentUser={setCurrentUser} />
      </div>
      <Footer />
    </div>
  );
}

export default Loginpage;
