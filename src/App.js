import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
