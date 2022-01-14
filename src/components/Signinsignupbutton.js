import React, { useState } from "react";
import { Link } from "react-router-dom";

function Singinsignupbuttons() {
  return (
    <div>
      <Link to="/login">
        <label for="tab-1" class="tab">
          Sign In
        </label>
      </Link>
      <Link to="/register">
        <label for="tab-2" class="tab">
          Sign Up
        </label>
      </Link>
    </div>
  );
}

export default Singinsignupbuttons;
