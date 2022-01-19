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
import Shoppingcartpage from "./components/Pages/Shoppingcartpage";
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
  if(action.type==="remove_merklist"){

    alertify.error(action.payload.singleBook.titel + " cikarildi.",1)


    const newArray2 = [...state];


    const bulunanIndex2 = [];
    
    for(let i=0;i<state.length;i++){
      
      if(state[i].titel===action.payload.singleBook.titel){
        
       bulunanIndex2.push(i);
       break;

      }
    }

    newArray2.splice(bulunanIndex2[0],1);
   
    console.log(newArray2);
 

    return newArray2
  }
  
  
  if(action.type==="remove"){

    alertify.error(action.payload.singleBook.titel + " cikarildi.",1)


    const newArray = [...state];


    const bulunanIndex = [];
    
    for(let i=0;i<state.length;i++){
      
      if(state[i].titel===action.payload.singleBook.titel){
        
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
  
 



  useEffect(() => {
    setAllUsers(users);
    setAllBooks(books);
  });

  console.log(allBooks);



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
            <Route path="/shoppingCart/:userName" element={<Shoppingcartpage/>} />
            <Route path="/merklist/:userName" element={<MerkListPage/>} />
          </Routes>
        </DataStore.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

