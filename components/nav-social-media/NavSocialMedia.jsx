import styles from './NavSocialMedia.module.scss';

const NavSocialMedia = () => {
  return (
    <nav className={styles.NavSocialMedia}>
      <ul>
        <li>
          <a
            href='https://github.com/franco-ortega'
            rel='noreferrer'
            target='_blank'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/francoortega/'
            rel='noreferrer'
            target='_blank'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/FrancoOrtegaDev'
            rel='noreferrer'
            target='_blank'
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/reefwoodcartography/'
            rel='noreferrer'
            target='_blank'
          >
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSocialMedia;
