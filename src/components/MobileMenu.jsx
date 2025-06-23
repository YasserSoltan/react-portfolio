import { NavLink } from "react-router";
import SocialLinks from "./SocialLinks";

export default function MobileMenu({ navLinks, setIsMenuOpen }) {
  return (
    <div className="menu dropdown-content mt-3 p-2 shadow bg-primary-light-bg dark:bg-primary-dark-bg fixed top-0 left-0 w-[100vw] h-[100vh] z-10 flex flex-col justify-between items-center">
      <div className="self-end text-primary-light-text dark:text-primary-dark-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-7 cursor-pointer hover:text-primary-light-link dark:hover:text-primary-dark-link outline-none active:outline-none focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          role="button"
          tabIndex={0}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul
        className="text-center flex flex-col gap-4 text-2xl text-primary-light-text dark:text-primary-dark-text"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
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
  );
}
