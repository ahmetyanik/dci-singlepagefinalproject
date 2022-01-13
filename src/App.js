import "./App.css";
import Homepage from "./components/Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Pages/Loginpage";
import { useEffect, useState } from "react";
import users from "./datenbank/users";

function App() {

  const [allUsers,setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=>{

    setAllUsers(users);
    
  },[])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login"  element={<Loginpage allUsers={allUsers} setCurrentUser={setCurrentUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
