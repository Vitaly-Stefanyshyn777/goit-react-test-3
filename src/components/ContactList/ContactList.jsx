import { useFilter } from "../../zustand/filter/filter";
import Contact from "./../Contact/Contact";

function ContactList({ contacts }) {
  const filter = useFilter((state) => state.filter);
  const contasFilter = contacts.filter((contacts) => {
    return (
      contacts.name.toLowerCase().includes(filter) ||
      contacts.number.toLowerCase().includes(filter)
    );
  });
  return (
    <div>
      <ul>
        {contasFilter.map((user) => {
          return (
            <li key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
