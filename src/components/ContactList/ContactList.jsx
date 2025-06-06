import Contact from "./../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((user) => {
          return (
            <li key={user.id}>
              {/* name: {user.name} number: {user.number}{" "} */}
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
