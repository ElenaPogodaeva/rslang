import React from "react";
import { Link } from "react-router-dom";

const GamesPage = () => {
  return (
    <>
      <h2>Games</h2>
      <Link to="/games/audiocall">
        <h3>AudioCall</h3>
      </Link>
    </>
  )
}

export default GamesPage