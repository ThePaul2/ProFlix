import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Promos from "./pages/promos";
import Rewards from "./pages/rewards";
import Tickets from "./pages/tickets";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Admin from "./pages/adminHome";
import AdminMovies from "./pages/adminMovies";
import EditShowtime from "./pages/adminShowtime";
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
import ResetPassword from "./pages/resetPassword";
import Purchased from "./pages/purchased";
import EditPayments from "./pages/editPayments";
import CardInfoPage from "./pages/cardInfoPage";
import ActivateUser from "./pages/activateUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/adminMovies" element={<ProtectedRoute><AdminMovies /></ProtectedRoute>} />
        <Route path="/adminUsers" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
        <Route path="/adminPromo" element={<AdminPromo />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
        <Route path="/showtime-movie/:movieTitle" element={<EditShowtime />} />
        <Route path="/edit-promo/:id" element={<EditPromo />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/tickets/:id" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/card-info" element={<CardInfoPage />} />
        <Route path="/edit-profile/:email" element={<EditProfile />} />
        <Route path="/edit-payments/:email" element={<EditPayments />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/users/:email" element={<User />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/ticketconfirmation" element={<TicketConfirmation />} />
        <Route path="/showtimes" element={<Showtimes />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:email" element={<ResetPassword />} />
        <Route path="/activate-user/:email" element={<ActivateUser />} />
      </Routes>
    </Router>
  );
}

export default App;