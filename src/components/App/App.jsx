import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const initData = JSON.parse(localStorage.getItem("contacts")) || [];
  const [contacts, setContacts] = useState(initData);
  const [showedContacts, setShowedContacts] = useState(contacts);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchString.toLowerCase())
    );

    setShowedContacts(filteredContacts);
  }, [searchString, contacts]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([newContact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchString={searchString} onSearchChange={setSearchString} />
      <ContactList contacts={showedContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
