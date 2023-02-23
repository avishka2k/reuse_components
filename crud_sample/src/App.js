import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";
import PasswordReset from "./pages/PasswordReset";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/password_reset" element={<PasswordReset />} />
          <Route
            path="/login"
            element={
              !currentUser?.emailVerified ? (
                <Login />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/register"
            element={
              !currentUser?.emailVerified ? (
                <Register />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
