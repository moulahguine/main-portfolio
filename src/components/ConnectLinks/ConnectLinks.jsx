// Components
import { ModalTrigger } from "@/components";
// Data
import socialLinksData from "@/data/socialLinksData";
// Icons
import { RxPerson } from "react-icons/rx";
// Styles
import "./ConnectLinks.scss";

// Connect Links component
export default function ConnectLinks({ renderTrigger }) {
  return (
    // Modal Trigger
    <ModalTrigger
      title="Social Links"
      size="small"
      renderTrigger={
        renderTrigger ??
        (({ open }) => (
          // Trigger button
          <button
            className="social-trigger-btn"
            onClick={open}
            aria-label="Open social links"
            type="button"
            title="Open social links"
          >
            {/* Trigger icon */}
            <span className="social__icon" aria-hidden="true">
              <RxPerson size={18} aria-hidden="true" role="img" />
            </span>
          </button>
        ))
      }
    >
      {/* Modal content */}
      <div>
        {/* Social links grid */}
        <ul className="social-links-grid" aria-label="Social links">
          {socialLinksData.map((social) => {
            const Icon = social.icon;
            // Social link item
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label={`${social.label} (opens in new tab)`}
                  title={social.label}
                  style={{ "--hover-color": social.color }}
                >
                  <span className="social-link-icon">
                    <Icon size={22} aria-hidden="true" role="img" />
                  </span>
                  <span className="social-link-label">{social.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </ModalTrigger>
  );
}
