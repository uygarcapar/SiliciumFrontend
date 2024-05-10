import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  <img src="https://r.resimlink.com/ycYOZe.png" alt="Logo" />
                </a>
              </div>


            </div>
            <div className="widget-nav-menu">
              <h4>Bilgilendirme</h4>
              <ul className="menu-list">
              <li>
                  <a href="/">Anasayfa</a>
                </li>


                <li>
                  <a href="/Shop">Mağaza</a>
                </li>
                <li>
                  <a href="/Blogs">Blog</a>
                </li>
                <li>
                  <a href="/Contact">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesap</h4>
              <ul className="menu-list">
                <li>
                  <a href="/Account">Giriş Yap</a>
                </li>
                <li>
                  <a href="/AccountRegister">Kayıt Ol</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Mağaza</h4>
              <ul className="menu-list">
                <li>
                  <a href="/shop">Çok Satan</a>
                </li>

                <li>
                  <a href="/shop">Yeni Ürünler</a>
                </li>
              </ul>
            </div>
            {/* <div className="widget-nav-menu">
              <h4>Categories</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Outerwear</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>
                Copyright 2024 © Silicium. Tüm hakları saklıdır. Designed by <a href="instagram.com">Uygar & Arda.</a>
              </p>
            </div>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-item">
                  <a href="#">Terms and Conditions</a>
                </li>
                <li className="list-item">
                  <a href="#">Returns Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">

                  <a className="footer-left-info" href="mailto:info@example.com">
                  <FontAwesomeIcon icon={faEnvelope}  className="custom-icon custom-icon1" />
                  </a>
                  <br></br>

                  <a className="footer-left-info" href="tel:212 234 34 74"><FontAwesomeIcon icon={faPhone} className="custom-icon"/></a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
