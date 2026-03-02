import FilmCard from "./products/FilmCard";

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

export default function FilmList({ openDrop, state }) {
  return (
    <div className="my-3">
      <h1 className="text-center">Lista Film</h1>
      <div>
        <ul className="list-unstyled d-flex flex-wrap">
          {films.map((singleElement, index) => (
            <li key={index} className="p-3">
              <FilmCard film={singleElement} />
            </li>
          ))}
        </ul>
        <select
          class="form-select form-select-lg mb-3"
          aria-label="Large select example"
        >
          <option selected>Genere</option>
          {films.map((singleFilm, index) => (
            <option key={index} value={index}>
              {singleFilm.genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
