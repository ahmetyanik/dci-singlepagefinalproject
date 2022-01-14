import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import books from './datenbank/books';
import Carousel from './components/Carousel';
import BookCard from './components/BookCard';

function App() {
  return (
    <div className="App">  
      
  
    <Header/>
    
    <Carousel />

    <BookCard/>
    <Footer/>

    </div>
  );
}

export default App;
