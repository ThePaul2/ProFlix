import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Events from "./pages/events";
import Rewards from "./pages/rewards";
import Tickets from "./pages/tickets";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Admin from "./pages/adminHome";
import AdminMovies from "./pages/adminMovies";
import AdminPromo from "./pages/adminPromo";
import AdminUsers from "./pages/adminUsers";
import EditProfile from "./pages/editProfile";
import EditMovie from "./pages/adminEditMovie";
import EditPromo from "./pages/adminEditPromo";
import Info from "./pages/info";
import Confirmation from "./pages/confirmation";
import User from "./pages/user";
import TicketConfirmation from "./pages/ticketConfirmation";
import Showtimes from "./pages/showtimes";
import ForgotPassword from "./pages/forgotPassword";




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminMovies" element={<AdminMovies />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminPromo" element={<AdminPromo />} />
        <Route path="/edit-movie" element={<EditMovie />} />
        <Route path="/edit-promo" element={<EditPromo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/tickets/:id" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/users/:email" element={<User />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/ticketconfirmation" element={<TicketConfirmation />} />
        <Route path="/showtimes" element={<Showtimes />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
