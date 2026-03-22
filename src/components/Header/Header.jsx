// components
import { Navigation, Menu, Logo } from "@/components";

// styles
import "./Header.scss";

export default function Header() {
  return (
    <>
      {/* desktop header */}
      <header className="header">
        {/* container */}
        <div className="container">
          {/* logo */}
          <Logo
            linkClassName="header__logo"
            imageClassName="header__logo-img"
            ariaLabel="Home"
            alt="logo"
            fill={true}
            priority
          />
          {/* navigation */}
          <Navigation className="nav-desktop" />
          {/* menu */}
          <Menu />
        </div>
      </header>
      {/* mobile header */}
      <div className="mobile-nav">
        <Navigation />
      </div>
    </>
  );
}
