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
  const [selectedGenre, setSelectedGenre] = useState("");
  const [displayFilms, setDisplayFilms] = useState(films);
  const [addFilm, setAddFilm] = useState({
    filmTitle: "",
    filmGenre: "",
    filmImage: "",
  });

  function genreClicked(genre) {
    setSelectedGenre(genre);
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setAddFilm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function addNewFilm(e) {
    e.preventDefault();
    const newFilmObject = {
      title: addFilm.filmTitle,
      genre: addFilm.filmGenre,
      image:
        addFilm.filmImage ||
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
    };
    setDisplayFilms([newFilmObject, ...displayFilms]);
  }

  useEffect(() => {
    const filteredFilms = selectedGenre
      ? displayFilms.filter((film) => film.genre === selectedGenre)
      : [...films];
    setDisplayFilms(filteredFilms);
  }, [selectedGenre]);

  return (
    <>
      <main className="container">
        <FilmList
          filtered={displayFilms}
          genreFunction={genreClicked}
          selected={selectedGenre}
        />
        <Form
          inputChange={handleInputChange}
          val={addFilm}
          pushFilm={addNewFilm}
        />
      </main>
    </>
  );
}
