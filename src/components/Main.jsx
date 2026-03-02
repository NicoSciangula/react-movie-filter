import FilmList from "./FilmList";
import Form from "./Form";
import { useState, useEffect } from "react";

export default function Main() {
  return (
    <>
      <main className="container">
        <FilmList />
      </main>
    </>
  );
}
