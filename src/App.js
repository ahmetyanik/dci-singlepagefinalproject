import "./App.css";
import Homepage from "./components/Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Pages/Loginpage";
import { useEffect, useState } from "react";
import users from "./datenbank/users";
import DataStore from "./components/DataStore";
import RegisterPage from "./components/Pages/Registerpage"

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setAllUsers(users);
  }, []);

  console.log(currentUser);

  return (
    <div className="App">
      <DataStore.Provider
        value={{ allUsers, setAllUsers, currentUser, setCurrentUser }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </DataStore.Provider>
    </div>
  );
}

export default App;
