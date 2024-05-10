import { useEffect } from "react";
import SearchBarModal from "./SearchBarModal";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import "./index.css";
import "./SearchBarModal.css";
import $ from "jquery";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import logo from "../assets/logo.png";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    $("#searchbar").on("click", function () {
      $(".modal-search").slideToggle();
    });

    $("#close-searchbar").on("click", function () {
      $(".modal-search").slideUp();
    });

    return () => {
      $("#searchbar").off("click");
      $("#close-searchbar").off("click");
    };
  }, []);

  useEffect(() => {
    //! home sidebar start

    const btnOpenSidebar = document.querySelector("#btn-menu");
    const sidebar = document.querySelector("#sidebar");

    const openSidebar = () => {
      sidebar.style.left = "0";
    };

    const closeSidebar = () => {
      sidebar.style.left = "-100%";
    };

    btnOpenSidebar.addEventListener("click", openSidebar);

    const btnCloseSidebar = document.querySelector("#close-sidebar");
    btnCloseSidebar.addEventListener("click", closeSidebar);

    //! home sidebar end

    /* click outside start  */

    const handleClickOutside = (event) => {
      if (
        !event.composedPath().includes(sidebar) &&
        !event.composedPath().includes(btnOpenSidebar)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleClickOutside);

    /* click outside end */

    return () => {
      btnOpenSidebar.removeEventListener("click", openSidebar);
      btnCloseSidebar.removeEventListener("click", closeSidebar);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { pathname } = useLocation();
  // const user = localStorage.getItem("user");

  return (
    <header>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"}>
                <img src={logo} width={150} alt="Logo" />
              </Link>
            </div>

            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={` menu-link ${pathname === "/" && "active"}  `}
                    >
                      Anasayfa
                      {/* <i className="bi bi-chevron-down"></i> */}
                    </Link>
                    {/* <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                        <li>
                          <a href="#">Lorem1</a>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/shop"}
                      className={` menu-link ${
                        pathname === "/shop" && "active"
                      }  `}
                    >
                      Mağaza <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <Link to={"/shop"}>Organic Silicium</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link to={"/blogs"} className="menu-link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/Contact"}
                      className={` menu-link ${
                        pathname === "/Contact" && "active"
                      }  `}
                    >
                      İletişim{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/account"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>

                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>

                {user && (
                  <button
                    className="search-button btn"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          logout();
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchBarModal />
    </header>
  );
};

export default Header;
