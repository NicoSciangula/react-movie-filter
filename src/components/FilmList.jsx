import FilmCard from "./products/FilmCard";

export default function FilmList({ listFilm }) {
  return (
    <div className="my-3">
      <h1 className="text-center">Lista Film</h1>
      <div>
        <ul className="list-unstyled d-flex flex-wrap">
          {listFilm.map((singleElement, index) => (
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
          {listFilm.map((singleFilm, index) => (
            <option key={index} value={index}>
              {singleFilm.genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
