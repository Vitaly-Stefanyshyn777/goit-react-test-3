import { useRegister } from "../../api/useMutation";

function RegisterForm() {
  const { mutate: register } = useRegister();
  const nadelSumbit = async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <form onSubmit={nadelSumbit}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button></button>
      </form>
    </div>
  );
}

export default RegisterForm;

// app/contacts/page.jsx
