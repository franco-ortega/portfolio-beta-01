import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <h3>Hello!</h3>

      <div>
        I&apos;m a software engineer who loves to create intuitive interfaces. I
        value:
        <ul>
          <li>
            well-documented and efficient processes that offer both structure
            and flexibility
          </li>
          <li>clear and kind communication</li>
          <li>cross-functional collaboration</li>
          <li>
            supportive environments that foster diversity and nurture growth
          </li>
        </ul>
        Optimism guides my efforts while practicality ensures that my goals are
        brought to fruition. Helping others brings me great joy.
      </div>
    </div>
  );
};

export default Home;
