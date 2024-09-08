import { useId } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const onSubmit = (values, { resetForm }) => {
    addContact(values);

    resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });
  return (
    <div className={css.box}>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={onSubmit}
        validationSchema={contactSchema}
      >
        <Form>
          <div className={css.formField}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId}></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.formField}>
            <label htmlFor={numberId}>Number</label>
            <Field type="text" name="number" id={numberId}></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <div className={css.actions}>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
