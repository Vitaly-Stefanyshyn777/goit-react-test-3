import { useLogin } from "../../api/useMutation";

function LoginForm() {
  const { mutate: login } = useLogin();
  const nadelSumbit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login({ email: email.value, password: password.value });
  };
  return (
    <div>
      <form onSubmit={nadelSumbit}>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button></button>
      </form>
    </div>
  );
}

export default LoginForm;
