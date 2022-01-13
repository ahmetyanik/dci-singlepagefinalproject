import './App.css';
import books from './datenbank/books';

function App() {
  return (
    <div className="App">
  
    <ul>
      {
        books.map((book,index)=>{

          return(
            <li key={index}>{book.title}</li>
          )
        })
      }
    </ul>

    </div>
  );
}

export default App;
