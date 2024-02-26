// Filename - App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Events from "./pages/events";
import Rewards from "./pages/rewards";
import Tickets from "./pages/tickets";
import Login from "./pages/login";
import Info from "./pages/info";
import TicketPage from "./components/TicketPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/ticket-page" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
