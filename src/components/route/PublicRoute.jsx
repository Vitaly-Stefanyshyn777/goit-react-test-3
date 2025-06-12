import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/auth/auth";

function PublicRoute({ component: Component }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return isLoggedIn ? <Navigate to="/contact" /> : Component;
}

export default PublicRoute;
