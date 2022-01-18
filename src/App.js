import "./App.css";
import Homepage from "./components/Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Pages/Loginpage";
import { useEffect, useReducer, useState } from "react";
import users from "./datenbank/users";
import DataStore from "./components/DataStore";
import RegisterPage from "./components/Pages/Registerpage";
import Singlebuchpage from "./components/Pages/Singlebuchpage";
import Userpage from "./components/Pages/Userpage";
import books from "./datenbank/books";
import Adminpage from "./components/Pages/Adminpage";
import Adminloginpage from "./components/Pages/Adminloginpage";
import alertify from "alertifyjs"
import ShoppingCart from "./components/Pages/ShoppingCart";
import MerkListPage from "./components/Pages/MerkListPage";


function reducer(state,action){


  if(action.type==="add"){   


    alertify.success(action.payload.singleBook.titel + " added.",1);
    
    return [...state,action.payload.singleBook]
  }

  if(action.type==="add_merk_book"){   


    alertify.success(action.payload.singleBook.titel + " added.",1);
    
    return [...state,action.payload.singleBook]
  }
  
  if(action.type==="plusFromCart"){

    

    alertify.success(action.payload.kitap[0].kitapismi + " eklendi.",1);
    return [...state,action.payload.kitap[0]]
  }
  
  if(action.type==="minusFromCart"){

    alertify.error(action.payload.kitap[0].kitapismi + " cikarildi.",1)


    const newArray = [...state];

    console.log(action.payload.index);
    console.log(action.payload.kitap);

    const bulunanIndex = [];
    
    for(let i=0;i<state.length;i++){
      
      if(state[i].kitapismi===action.payload.kitap[0].kitapismi){
        
       bulunanIndex.push(i);
       break;

      }
    }

    newArray.splice(bulunanIndex[0],1);
   
    console.log(newArray);
 

    return newArray
  }

}


function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [allBooks, setAllBooks] = useState([])
  const [adminlogin, setAdminLogin] = useState(true);
  
  
  const initialState = [];
  const [warenkorbState, warenkorbDispatch] = useReducer(reducer, initialState)
  const [merkListState, merkListDispatch] = useReducer(reducer, initialState)
  

  
  console.log(warenkorbState);


  useEffect(() => {
    setAllUsers(users);
    setAllBooks(books);
  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        <DataStore.Provider
          value={{ allUsers, setAllUsers, currentUser, setCurrentUser, allBooks, setAllBooks, warenkorbState, warenkorbDispatch, merkListState, merkListDispatch }}
        >
          <Routes>
            <Route exact path="/" element={<Homepage  />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/book/:ISBN/:bookName" element={<Singlebuchpage  />} />
            <Route path="/user/:id/:name" element={<Userpage/>} />
            <Route path="/admin" element={adminlogin ? <Adminpage/> : <Adminloginpage/>} />
            <Route path="/shoppingCart/:userName" element={<ShoppingCart/>} />
            <Route path="/merklist/:userName" element={<MerkListPage/>} />
          </Routes>
        </DataStore.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

