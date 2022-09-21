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
  return (
    <nav className={styles.NavSocialMedia}>
      <ul>
        <li>
          <a
            title='GitHub'
            href='https://github.com/franco-ortega'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />
          </a>
        </li>
        <li>
          <a
            title='LinkedIn'
            href='https://www.linkedin.com/in/francoortega/'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 30 }} />
          </a>
        </li>
        <li>
          <a
            title='Twitter'
            href='https://twitter.com/FrancoOrtegaDev'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 30 }} />
          </a>
        </li>
        <li>
          <a
            title='Instagram'
            href='https://www.instagram.com/reefwoodcartography/'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSocialMedia;
