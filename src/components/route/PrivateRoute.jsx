import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/auth/auth";

function PrivateRoute({ component: Component }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return !isLoggedIn ? <Navigate to="/login" /> : Component;
}

export default PrivateRoute;
