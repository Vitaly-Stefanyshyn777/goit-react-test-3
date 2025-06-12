import { NavLink } from "react-router-dom";
import { useAuthStore } from "../zustand/auth/auth";

function Navigation() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <NavLink to="/contact">Contact</NavLink>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  );
}

export default Navigation;
