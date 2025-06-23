import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faBehance,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <ul className="mb-5 md:mb-0 flex gap-3 text-2xl text-primary-light-text dark:text-primary-dark-text justify-center">
      <li>
        <a
          href="https://www.twitter.com/eslamelmorsi"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>
      <li>
        <a
          href="https://www.behance.net/eslamelmorsi"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/eslam-elmorsi-8b0b1a1b2/"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/eslam.elmorsi.7"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/eslam.elmorsi/"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@eslamelmorsi"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@eslamelmorsi"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
    </ul>
  );
}
