import "./App.css";
import Homepage from "./components/Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Pages/Loginpage";
import { useEffect, useState } from "react";
import users from "./datenbank/users";
import DataStore from "./components/DataStore";
import RegisterPage from "./components/Pages/Registerpage";
import Userpage from "./components/Pages/Userpage";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setAllUsers(users);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <DataStore.Provider
          value={{ allUsers, setAllUsers, currentUser, setCurrentUser }}
        >
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user/:id/:name" element={<Userpage/>} />
          </Routes>
        </DataStore.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

