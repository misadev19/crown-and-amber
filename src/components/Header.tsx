import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { cartCount } = useCart();
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (language: "en" | "ja") => {
    i18n.changeLanguage(language);
    localStorage.setItem("crown-amber-language", language);
  };

  return (
    <header className="header">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/" className="mobile-logo" onClick={() => setMenuOpen(false)}>
          CROWN & AMBER
        </Link>

        <Link to="/cart" className="mobile-cart">
          <span className="cart-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4H5L7.2 15.5C7.4 16.4 8.2 17 9.1 17H17.5C18.4 17 19.2 16.4 19.4 15.5L21 8H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="9.5" cy="20" r="1.2" fill="currentColor" />
              <circle cx="17" cy="20" r="1.2" fill="currentColor" />
            </svg>
          </span>

          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t("nav.home")}
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            {t("nav.products")}
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {t("nav.story")}
          </Link>

          <div className="mobile-language">
            <button
              type="button"
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>

            <span>/</span>

            <button
              type="button"
              className={i18n.language === "ja" ? "active" : ""}
              onClick={() => changeLanguage("ja")}
            >
              JP
            </button>
          </div>
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="desktop-header">
        <div className="header-brand">
          <Link to="/" className="logo">
            CROWN & AMBER
          </Link>
        </div>

        <nav className="header-nav">
          <div className="nav-center">
            <Link to="/">{t("nav.home")}</Link>
            <Link to="/products">{t("nav.products")}</Link>
            <Link to="/about">{t("nav.story")}</Link>
          </div>

          <div className="nav-right">
            <Link to="/cart" className="cart-link">
              <span className="cart-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 4H5L7.2 15.5C7.4 16.4 8.2 17 9.1 17H17.5C18.4 17 19.2 16.4 19.4 15.5L21 8H6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="9.5" cy="20" r="1.2" fill="currentColor" />
                  <circle cx="17" cy="20" r="1.2" fill="currentColor" />
                </svg>
              </span>

              <span className="cart-count">{cartCount}</span>
            </Link>

            <div className="language-switch">
              <button
                type="button"
                className={i18n.language === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>

              <span>/</span>

              <button
                type="button"
                className={i18n.language === "ja" ? "active" : ""}
                onClick={() => changeLanguage("ja")}
              >
                JP
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
