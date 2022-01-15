import Footer from "../Footer";
import Header from "../Header";
import Logintemplate from "../Logintemplate";

function Loginpage() {
  return (
    <div>
      <Header />
      <div className="my-4">
        <Logintemplate />
      </div>
      <Footer />
    </div>
  );
}

export default Loginpage;
