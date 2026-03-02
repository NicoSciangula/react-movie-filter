import FilmList from "./FilmList";
import Form from "./Form";
import { useState, useEffect } from "react";

export default function Main() {
  const [isOpen, setisOpen] = useState(false);

  function openDropDown() {
    setisOpen((current) => !current);
  }

  return (
    <>
      <main className="container">
        <FilmList openDrop={openDropDown} state={isOpen} />
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            <b>Filtra genere</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Inserisci genere del film"
          />
        </div>
      </main>
    </>
  );
}
