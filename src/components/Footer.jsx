function Footer() {
  return (
    <footer className="footer">

      <div className="contacts-footer">

        <div className="contacts-left">
            
          <div className="contacts-item-footer">
            <i className="bi bi-envelope"></i>
            <span>Email :</span>
            <a
              href="mailto:agusindra020405@gmail.com"
              className="contacts-link-footer"
            >
              agusindra020405@gmail.com
            </a>
          </div>

          <div className="contacts-item-footer">
            <i className="bi bi-telephone"></i>
            <span>Phone :</span>
            <a href="tel:+1234567890" className="contacts-link-footer">
              +62 812 3785 5366
            </a>
          </div>

          <div className="contacts-item-footer">
             <i className="bi bi-geo-alt"></i>
            <span>Location :</span>
            <span className="contacts-text-footer">Denpasar, BALI</span>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="social-footer">
          <p className="social-title">Follow Me On</p>

          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <p className="footer-text">
        &copy; 2026 Agus Indra. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
