import React, { useState } from "react";
import Swal from "sweetalert2";
import { auth, googleProvider } from "../../config/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (document.activeElement.name === "Login") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
      }
    } else if (document.activeElement.name === "Register") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully registered and logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          style={{ marginTop: "12px" }}
          type="submit"
          value="Login"
          name="Login"
        />
        <input
          style={{
            marginTop: "12px",
            marginLeft: "12px",
            backgroundColor: "black",
          }}
          type="submit"
          value="Register"
          name="Register"
        />
        <button
          className="google-signin-button"
          onClick={signInWithGoogle}
          style={{
            marginTop: "12px",
            marginLeft: "12px",
            backgroundColor: "gray",
            borderStyle: "none",
          }}
        >
          Login With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
