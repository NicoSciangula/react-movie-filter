import FilmList from "./FilmList";
import Form from "./Form";
import { useState, useEffect } from "react";

export default function Main() {
  const [clicked, setClicked] = useState(false);

  function genreClicked() {}

  useEffect(() => {}, []);

  return (
    <>
      <main className="container">
        <FilmList />
      </main>
    </>
  );
}
