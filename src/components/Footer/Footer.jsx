import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left side: Copyright & Links */}
        <div className="footer__left">
          <span className="footer__copyright">
            © {currentYear} moulahguine.dev
          </span>
          <span className="footer__divider">|</span>
          <Link href="/contact" className="footer__link">
            Contact
          </Link>
        </div>

        {/* Right side: Social Icons */}
        <div className="footer__right">
          <a
            href="https://linkedin.com/in/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn (opens in new tab)"
            title="LinkedIn"
          >
            <SlSocialLinkedin role="img" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub (opens in new tab)"
            title="GitHub"
          >
            <FaGithub role="img" aria-hidden="true" />
          </a>
          <a
            href="mailto:contact@moulahguine.dev"
            className="footer__social-link"
            aria-label="Send email"
            title="Email"
          >
            <TfiEmail role="img" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
