import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <a href='/Resume_FrancoOrtega.pdf' rel='noreferrer' target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
