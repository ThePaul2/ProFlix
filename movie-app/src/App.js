import ActivateUser from "./pages/activateUser";
import Admin from "./pages/adminHome";
import AdminEditMovie from "./pages/adminEditMovie";
import AdminEditPromo from "./pages/adminEditPromo";
import AdminEditPrice from "./pages/adminEditPrices";
import AdminMovies from "./pages/adminMovies";
import EditShowtime from "./pages/adminShowtime";
import EditSchedule from "./pages/adminSchedule";
import AdminPromo from "./pages/adminPromo";
import AdminPrices from "./pages/adminPrices";
import AdminUsers from "./pages/adminUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardInfoPage from "./pages/cardInfoPage";
import Confirmation from "./pages/confirmation";
import EditMovie from "./pages/adminEditMovie";
import EditPayments from "./pages/editPayments";
import EditProfile from "./pages/editProfile";
import ForgotPassword from "./pages/forgotPassword";
import Home from "./pages/home";
import Info from "./pages/info";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Promos from "./pages/promos";
import ProtectedRoute from "./components/ProtectedRoute";
import Purchased from "./pages/purchased";
import React from "react";
import ResetPassword from "./pages/resetPassword";
import Rewards from "./pages/rewards";
import Showtimes from "./pages/showtimes";
import SignUp from "./pages/signup";
import TicketConfirmation from "./pages/ticketConfirmation";
import Tickets from "./pages/tickets";
import User from "./pages/user";
import UserProtectedRoute from "./components/UserProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activate-user/:email" element={<ActivateUser />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/adminMovies" element={<ProtectedRoute><AdminMovies /></ProtectedRoute>} />
        <Route path="/adminUsers" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
        <Route path="/adminPrices" element={<ProtectedRoute><AdminPrices /></ProtectedRoute>} />
        <Route path="/adminPromo" element={<ProtectedRoute><AdminPromo /></ProtectedRoute>} />
        <Route path="/edit-movie/:id" element={<ProtectedRoute><EditMovie /></ProtectedRoute>} />
        <Route path="/add-showtime/:movieTitle" element={<ProtectedRoute><EditSchedule /></ProtectedRoute>} />
        <Route path="/showtime-movie/:movieTitle" element={<ProtectedRoute><EditShowtime /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/tickets/:id" element={<UserProtectedRoute><Tickets /></UserProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/card-info" element={<CardInfoPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/edit-movie/:id" element={<ProtectedRoute><AdminEditMovie /></ProtectedRoute>} />
        <Route path="/edit-promo/:id" element={<ProtectedRoute><AdminEditPromo /></ProtectedRoute>} />
        <Route path="/edit-price/" element={<ProtectedRoute><AdminEditPrice /></ProtectedRoute>} />
        <Route path="/edit-profile/:email" element={<UserProtectedRoute><EditProfile /></UserProtectedRoute>} />
        <Route path="/edit-payments/:email" element={<UserProtectedRoute><EditPayments /></UserProtectedRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/purchased" element={<UserProtectedRoute><Purchased /></UserProtectedRoute>} />
        <Route path="/reset-password/:email" element={<ResetPassword />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/showtimes" element={<Showtimes />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ticketconfirmation" element={<TicketConfirmation />} />
        <Route path="/tickets/:id" element={<UserProtectedRoute><Tickets /></UserProtectedRoute>} />
        <Route path="/users/:email" element={<UserProtectedRoute><User /></UserProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;