import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import MerkListTemplate from "../MerkListTemplate";

function MerkListPage() {
  return (
    <div>
      <div>
        <Header />
        <div className="my-4">
          <MerkListTemplate />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MerkListPage;
