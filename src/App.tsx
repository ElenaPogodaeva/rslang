import React from "react";
import LoginPage from "./pages/authorization/login";
import GamesPage from "./pages/games/games";
import HomePage from "./pages/home/home";
import StatisticsPage from "./pages/statistics/statistics";
import TextbookPage from "./pages/textbook/textbook";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { Navigation } from "./components";
import RegistrationPage from "./pages/authorization/registration";
import { StartPage } from "./pages/start-page/startPage";
import { Main } from "./components/Main/Main";
import TeamPage from "./pages/team/team";

import './style.scss';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="home" element={<HomePage />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="textbook" element={<TextbookPage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="team" element={<TeamPage />} />
        </Routes>
      </Main>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="textbook" element={<TextbookPage />} >
          <Route path="/textbook/:tab" element={<TextbookPage />} />
        </Route>
        <Route path="games" element={<GamesPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
       </Routes> */}
    </BrowserRouter>
  )
}

export default App
