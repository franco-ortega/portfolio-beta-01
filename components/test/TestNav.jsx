import styles from './TestNav.module.scss';

const TestNav = () => {
  return (
    <div className={styles.TestNav}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </nav>
    </div>
  );
};

export default TestNav;
