import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-main">
        <Link to="/" className="footer-logo">
          CROWN & AMBER
        </Link>

        <p className="footer-tagline">A TIMELESS CUP OF TEA</p>

        <p className="footer-disclaimer">{t("footer.disclaimer")}</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CROWN & AMBER</p>
      </div>
    </footer>
  );
}

export default Footer;
