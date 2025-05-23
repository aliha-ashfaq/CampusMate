import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UniversityDetail from "./pages/UniversityDetail";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university/:id" element={<UniversityDetail />} />
        <Route path="/contact/"  element={<Contact/>}  />
        <Route path="/faq"  element={<Faq/>}    />
      </Routes>
    </Router>
  );
}
