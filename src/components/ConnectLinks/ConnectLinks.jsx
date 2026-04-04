// nextjs client components
import Link from "next/link";

// Components
import { ModalTrigger } from "@/components";

// Data
import socialLinksData from "@/data/socialLinksData";

// Styles
import "./ConnectLinks.scss";

// Connect Links component
export default function ConnectLinks({ renderTrigger }) {
  return (
    // Modal Trigger
    <ModalTrigger title="Find me on" size="small" renderTrigger={renderTrigger}>
      {/* Social links grid */}
      <ul className="list__social-links" role="list">
        {socialLinksData.map(({ icon: Icon, label, href, color }) => {
          // Social link item
          return (
            <li key={label} className="list__social-link-item" role="listItem">
              {/* Social link */}
              <Link
                href={href}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                aria-label={`Visit ${label}`}
                style={{ "--hover-color": color }}
              >
                {/* Social icon */}
                <span
                  className="social-link__icon--wrapper"
                  aria-hidden="true"
                  role="img"
                >
                  <Icon />
                </span>

                {/* Social label */}
                <span className="social-link__label">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </ModalTrigger>
  );
}
