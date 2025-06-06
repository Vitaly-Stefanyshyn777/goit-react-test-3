import { useDeleteContact } from "../../api/useMutation";

function Contact({ user }) {
  const { mutate: deleteContact } = useDeleteContact();
  const handelDeleteContacts = () => {
    deleteContact(user.id);
  };
  return (
    <div>
      <p>
        name: {user.name} number: {user.number}{" "}
      </p>
      <button type="sumbit" onClick={handelDeleteContacts}></button>
    </div>
  );
}

export default Contact;
