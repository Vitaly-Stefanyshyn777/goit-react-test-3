import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Navigation;
