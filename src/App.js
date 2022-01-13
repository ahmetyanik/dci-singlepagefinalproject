import "./App.css";
import Homepage from "./components/Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Pages/Loginpage";
import Register from "./components/Pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login"  element={<Loginpage/>}/>
          <Route path="/register"  element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
