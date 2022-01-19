import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import DataStore from "./DataStore";

function CategorieArea() {
  const params = useParams();
  const { allBooks } = useContext(DataStore);
  const [categorizieredBooks, setCategorizieredBooks] = useState([]);

  const findingBooks = allBooks.filter((book, index) => {
    return book.kategorie === params.categorie;
  });

  useEffect(() => {
    setCategorizieredBooks(findingBooks);
  }, [findingBooks]);

  

  return (
    <div>
      <div className="container d-flex flex-row flex-wrap justify-content-around">
        {categorizieredBooks.map((book, index) => {
          return <BookCard book={book} index={index} />;
        })}
      </div>
    </div>
  );
}

export default CategorieArea;
