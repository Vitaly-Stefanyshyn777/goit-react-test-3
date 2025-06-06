import { useAddContact } from "../../api/useMutation";

function ContactForm() {
  const { mutate: addContact } = useAddContact();

  const handelSumbit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    addContact({ name: name.value, number: number.value });
  };
  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input type="text" name="name" />
        <input type="text" name="number" />
        <button type="sumbit"></button>
      </form>
    </div>
  );
}

export default ContactForm;
