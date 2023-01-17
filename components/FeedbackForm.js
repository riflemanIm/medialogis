import styles from "./FeedbackForm.module.css";

export default function FeedbackForm() {
  return (
    <form
      className="contact_form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="feedback"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Nom</label>
      <input
        id="name"
        className={styles["form-field"]}
        type="text"
        name="name"
        placeholder="Nom*"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        className={styles["form-field"]}
        type="email"
        name="email"
        placeholder="Email *"
        required
      />

      <label htmlFor="feedback">Message</label>
      <textarea
        id="Message"
        className={styles["form-field"]}
        wrap="soft"
        name="message"
        placeholder="Message *"
        required
      ></textarea>
      <div className="ml_button">
        <button className="color" type="submit">
          Soumettre
        </button>
      </div>
    </form>
  );
}
