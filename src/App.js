import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import User from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Cookies from "js-cookie";
// import Payment from "./pages/Payment";

function App() {
  const token = Cookies.get("token");

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
