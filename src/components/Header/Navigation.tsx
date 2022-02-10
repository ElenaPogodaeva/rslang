import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
    <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/textbook">textbook</Link>
          </li>
          <li>
            <Link to="/games">games</Link>
          </li>
          <li>
            <Link to="/statistics">statistics</Link>
          </li>
        </ul>
      </div>
      <hr />
      </>
  )
}