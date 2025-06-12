import { useQuery } from "@tanstack/react-query";
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContact } from "../api/auth";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

function ContactPage() {
  const { data } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContact,
  });
  console.log(data?.length > 0);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {data?.length > 0 && <ContactList contacts={data} />}
    </div>
  );
}

export default ContactPage;
