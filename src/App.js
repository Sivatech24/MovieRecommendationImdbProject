import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import HomePage from './HomePage';  // Import HomePage component
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  // Check if user is authenticated when the app first loads
  useEffect(() => {
    const isUserAuthenticated = localStorage.getItem("isAuthenticated");
    if (isUserAuthenticated === "true") {
      setIsAuthenticated(true); // User is authenticated, load HomePage
    }
  }, []);

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("Signup successful!");

      // After signup, set authentication and redirect to HomePage
      afterAuthSuccess();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");

      // After login, set authentication and redirect to HomePage
      afterAuthSuccess();
    } catch (error) {
      alert(error.message);
    }
  };

  // This function is called after successful login or signup
  const afterAuthSuccess = () => {
    console.log("Login/Signup successful, performing post-auth actions...");
    setIsAuthenticated(true); // Set state to indicate authentication
    localStorage.setItem("isAuthenticated", "true"); // Store the state in localStorage to persist login
  };

  // If authenticated, render HomePage
  if (isAuthenticated) {
    return <HomePage />;
  }

  return (
    <div className="container">
      <div className="background"></div>
      <div className="form-container">
        {isSignup ? (
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <label htmlFor="signup-name">Your Name</label>
            <input
              type="text"
              id="signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <a onClick={toggleForm}>Sign In</a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Sign In</h2>
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign In</button>
            <p>
              Don’t have an account? <a onClick={toggleForm}>Sign Up</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
