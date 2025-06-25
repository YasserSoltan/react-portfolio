import { NavLink } from "react-router";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/video-editing", label: "Video Editing" },
  { to: "/motion-graphics", label: "Motion Graphics" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-primary-light-bg dark:bg-primary-dark-bg p-5 flex md:flex-col items-center">
      <h1 className="text-center font-bold text-5xl text-black dark:text-white pt-3 mb-4">
        AMR EL-GAREH
      </h1>
      <div className="navbar">
        <div className="hidden lg:flex flex-col  gap-4">
          <ul className="px-1 text-3xl text-primary-light-text dark:text-primary-dark-text flex justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary-light-link dark:text-primary-dark-link"
                      : "hover:text-primary-light-link dark:hover:text-primary-dark-link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </div>
        <div className="flex md:hidden">
          <div className="bg-primary-light-bg dark:bg-primary-dark-bg dropdown dropdown-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 outline-none active:outline-none focus:outline-none text-primary-dark-text hover:text-primary-light-link dark:hover:text-primary-dark-link dark:focus:text-primary-dark-link"
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              role="button"
              tabIndex={0}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {isMenuOpen && (
              <MobileMenu navLinks={navLinks} setIsMenuOpen={setIsMenuOpen} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
