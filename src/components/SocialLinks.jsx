import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faXTwitter,
  faBehance,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTiktok,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <ul className="mb-5 md:mb-0 flex gap-3 text-2xl text-primary-light-text dark:text-primary-dark-text justify-center">
      {/* <li>
        <a
          href="https://www.twitter.com/eslamelmorsi"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li> */}
      <li>
        <a
          href="https://www.behance.net/amrelgareh"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </li>
      <li>
        <a
          href="https://eg.linkedin.com/in/amr-elgareh-37b7181b3"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/share/1EQptw3KuV/?mibextid=wwXIfr"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/amr_elgare7"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@amrelgareh?_t=ZS-8xVDV3pkS8G&_r=1"
          target="_blank"
          className="hover:text-primary-light-link dark:hover:text-primary-dark-link"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
    </ul>
  );
}
