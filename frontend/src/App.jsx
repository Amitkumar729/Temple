import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Donations } from "./pages/donations/donations";
import { Founder } from "./pages/founder/founder";
import { Login } from "./pages/login/login";
import { AdminDashboard } from "./pages/admin/admin";
import { About } from "./components/about/about";
 
 

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations  />} />
        <Route path="/about-me" element={<Founder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about-rahu" element={<About />} />
       
      </Routes>
    </Router> 
  );
};

export default App;
