import axios from "axios";
import { useAuthStore } from "../../zustand/auth/auth";

function LoginForm() {
  const { setAuth, user } = useAuthStore();
  const nadelSumbit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const { data } = await axios.post("/users/login", {
      email: email.value,
      password: password.value,
    });
    setAuth(data);
  };
  return (
    <div>
      <form onSubmit={nadelSumbit}>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button></button>
      </form>
      {user && <p>{user.name}</p>}
    </div>
  );
}

export default LoginForm;
