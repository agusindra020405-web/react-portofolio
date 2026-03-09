import { Link } from "react-router-dom";
function Contacts() {
  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <div className="contacts-content">
          <div className="contacts-info fade-in">
            <h2 className="contacts-title">Let's Work Together</h2>
            <p className="contacts-description">
              Ready to bring your ideas to life? I'd love to hear about your
              project and discuss how we can create something amazing together.
            </p>
          </div>
          <Link to="/contact" className="submit-button">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
