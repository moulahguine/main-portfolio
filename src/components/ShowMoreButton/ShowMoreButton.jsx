import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import "./ShowMoreButton.scss";

export default function ShowMoreButton({ href, label, count }) {
  return (
    <Link href={href} className={`show-more-btn`}>
      <span>
        view more {label}
        {typeof count === "number" && ` (${count} more)`}
      </span>
      <GoArrowUpRight size={15} role="img" aria-hidden="true" />
    </Link>
  );
}
