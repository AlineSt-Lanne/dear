import ContactMessage from "./ContactMessage";
import "./styles/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="post">
        <h1 className="contact-title">Nous contacter</h1>
        <label htmlFor="name">
          Nom - Société *
          <input
            className="name"
            id="name"
            name="name"
            type="text"
            />
        </label>

        <label htmlFor="email">
          Email *
          <input
            className="email"
            id="email"
            type="email"
            name="email"
            placeholder="Champ obligatoire"
            />
        </label>

        <label htmlFor="objet">
          Objet *
          <input
            className="objet"
            id="objet"
            type="text"
            name="objet"
            placeholder="Champ obligatoire"
            />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Dis-nous tout"
            />
        </label>

        <button
          className="contactButton"
          type="submit"
          value="submit"
          style={{ cursor: "pointer" }}
        >
          Envoyer
        </button>
        <ContactMessage />
      </form>
    </div>
  );
}
