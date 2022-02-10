import React from "react";
import AuthorizationPage from "./pages/authorization/authorization";
import GamesPage from "./pages/games/games";
import HomePage from "./pages/home/home";
import StatisticsPage from "./pages/statistics/statistics";
import TextbookPage from "./pages/textbook/textbook";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components";

import MiniDrawer from "./components/Header/Menu";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MiniDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/textbook" element={<TextbookPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
