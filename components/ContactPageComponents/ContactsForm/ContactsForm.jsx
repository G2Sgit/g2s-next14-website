"use client";
import css from "./ContactsForm.module.scss";

const ContactsForm = () => {
  return (
    <form className={css.form}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Name"
        // onChange={formik.handleChange}
        // value={formik.values.name}
      />
      <input
        className={css.input}
        type="text"
        name="email"
        placeholder="Email"
        // onChange={formik.handleChange}
        // value={formik.values.email}
      />
      <input
        className={css.input}
        type="text"
        name="phone"
        placeholder="phone"
        // onChange={formik.handleChange}
        // value={formik.values.phone}
      />
      <input
        className={css.input}
        type="text"
        name="website"
        placeholder="website"
        // onChange={formik.handleChange}
        // value={formik.values.website}
      />
      <textarea
        className={css["text-area"]}
        placeholder="Your Message"
        // onChange={formik.handleChange}
        // value={formik.values.message}
      />
      <button className={css.button} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactsForm;