import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import UniversityDetail from "./pages/UniversityDetail";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [user, setUser] = useState(null); 
  function AdminRoute({ children }) {
    if (!user || user.role !== "admin") {
      return <Navigate to="/signin" replace />;
    }
    return children;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university/:id" element={<UniversityDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/signin"
          element={
            <AuthPage user={user} onLogin={setUser} />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard user={user} />
            </AdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
function AuthPage({ user, onLogin }) {
  const [showSignup, setShowSignup] = useState(false);
  if (user) {
    return user.role === "admin" ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/" replace />
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      {showSignup ? (
        <>
          <SignUpPage />
          <button
            onClick={() => setShowSignup(false)}
            style={{
              marginTop: 20,
              padding: "8px 16px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Back to Login
          </button>
        </>
      ) : (
        <>
          <LoginPage onLogin={onLogin} />
          <button
            onClick={() => setShowSignup(true)}
            style={{
              marginTop: 20,
              padding: "8px 16px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Go to Sign Up
          </button>
        </>
      )}
    </div>
  );
}
