import FilmList from "./FilmList";
import Form from "./Form";
import { useState, useEffect } from "react";
const films = [
  {
    title: "Inception",
    genre: "Fantascienza",
    image:
      "https://stanzedicinema.com/wp-content/uploads/2010/05/inception-poster4.jpg?w=691",
  },
  {
    title: "Il Padrino",
    genre: "Thriller",
    image: "https://pad.mymovies.it/filmclub/2002/08/056/locandina.jpg",
  },
  {
    title: "Titanic",
    genre: "Romantico",
    image: "https://pad.mymovies.it/filmclub/2004/06/506/locandinapg9.jpg",
  },
  {
    title: "Batman",
    genre: "Azione",
    image: "https://static.posters.cz/image/1300/198201.jpg",
  },
  {
    title: "Interstellar",
    genre: "Fantascienza",
    image: "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg",
  },
  {
    title: "Pulp Fiction",
    genre: "Thriller",
    image: "https://static.posters.cz/image/1300/1288.jpg",
  },
];

export default function Main() {
  const [clicked, setClicked] = useState(false);

  function genreClicked() {}

  useEffect(() => {}, []);

  return (
    <>
      <main className="container">
        <FilmList listFilm={films}/>
      </main>
    </>
  );
}
