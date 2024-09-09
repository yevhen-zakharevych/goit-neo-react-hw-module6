import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.contact}>
      <div className={css.details}>
        <div className={css.info}>
          <FaUser className={css.icon} />
          <p>{contact.name}</p>
        </div>
        <div className={css.info}>
          <FaPhoneAlt className={css.icon} />
          <p>{contact.number}</p>
        </div>
      </div>
      <div className={css.actions}>
        <button
          className={css.buttonDelete}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
