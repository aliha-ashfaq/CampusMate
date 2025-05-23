import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UniversityDetail from "./pages/UniversityDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university/:id" element={<UniversityDetail />} />
      </Routes>
    </Router>
  );
}
