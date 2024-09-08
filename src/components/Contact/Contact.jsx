import { FaUser, FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

function Contact({ contact, deleteContact }) {
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
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
