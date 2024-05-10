import "./Contact.css";

const Contact = () => {
  return (
    <div className="phone">
      <div className="phone-wrapper">
        <div className="phone-left">
          <p className="phone-title">Bize Ulaşın</p>
          <p className="phone-number">+90 542 398 54 21</p>
          <div className="phone-left-contents">
            <div className="phone-single">
              <i className="fa-regular fa-clock"></i>
              <h5>Çalışma saatleri:</h5>
              <p>Pazartesi-Cumartesi, 09:00 - 18:00</p>
            </div>
            <div className="phone-single">
              <i className="fa-regular fa-envelope"></i>
              <h5>E-Mail:</h5>
              <p>info@serafettinsaracoglu.com</p>
            </div>
            <div className="phone-single">
              <i className="fa-brands fa-whatsapp"></i>
              <h5>WhatsApp:</h5>
              <a href="https://api.whatsapp.com/send/?phone=905347495112&text&type=phone_number&app_absent=0">
                +90 (534) 749 51 12
              </a>
            </div>
            <div className="phone-single">
              <i className="fa-brands fa-instagram"></i>

              <h5>Instagram:</h5>

              <a href="https://www.instagram.com/organicsilica_tr/?hl=tr">
                <p>organicsilicia_tr</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
