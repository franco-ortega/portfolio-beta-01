import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import styles from './NavSocialMedia.module.scss';

const NavSocialMedia = () => {
  const iconColor = 'lightblue';

  return (
    <nav className={styles.NavSocialMedia}>
      <ul>
        <li>
          <a
            href='https://github.com/franco-ortega'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: 30, color: iconColor }}
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/francoortega/'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: 30, color: iconColor }}
            />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/FrancoOrtegaDev'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: 30, color: iconColor }}
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/reefwoodcartography/'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 30, color: iconColor }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSocialMedia;
