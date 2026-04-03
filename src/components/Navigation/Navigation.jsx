"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  TbSmartHome,
  TbLayoutGrid,
  TbBrandBlogger,
  TbBriefcase,
} from "react-icons/tb";

// styles
import "./Navigation.scss";

// Navigation items
const NAVIGATION_ITEMS = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: TbSmartHome,
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    icon: TbLayoutGrid,
  },
  {
    id: "experience",
    label: "Experience",
    path: "/experience",
    icon: TbBriefcase,
  },
  {
    id: "blog",
    label: "Blog",
    path: "/blog",
    icon: TbBrandBlogger,
  },
];

// Normalize the path
function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.toLowerCase().replace(/\/+$/, "") || "/";
}

// Check if the current path is active
function isActivePath(current, target) {
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}

export default function Navigation({ className }) {
  // Get the current pathname
  const pathname = normalizePath(usePathname());

  return (
    <nav className={`nav ${className}`} aria-label="Primary navigation">
      <ul className="nav__list">
        {NAVIGATION_ITEMS.map((item) => {
          const itemPath = normalizePath(item.path);
          const isActive = isActivePath(pathname, itemPath);

          const Icon = item.icon;
          return (
            <li key={item.id} className="nav__item">
              <Link
                href={itemPath}
                className={`nav__link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="nav__icon">
                  <Icon aria-hidden="true" role="img" />
                </span>
                <span className="nav__label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
