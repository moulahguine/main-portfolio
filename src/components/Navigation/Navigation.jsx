"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

import { GrHomeRounded } from "react-icons/gr";

import "./Navigation.scss";

// Navigation items
const NAVIGATION_ITEMS = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: GrHomeRounded,
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    icon: HiOutlineFolder,
  },
  {
    id: "experience",
    label: "Experience",
    path: "/experience",
    icon: HiOutlineBriefcase,
  },
  {
    id: "blog",
    label: "Blog",
    path: "/blog",
    icon: HiOutlineChatBubbleLeftRight,
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
                {Icon && (
                  <span className="nav__icon-wrapper" aria-hidden="true">
                    <span className="nav__icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </span>
                )}
                <span className="nav__link__inner">
                  <div className="nav__link__slide">
                    <span className="nav__link__text">{item.label}</span>
                    <span className="nav__link__text" aria-hidden="true">
                      {item.label}
                    </span>
                  </div>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
