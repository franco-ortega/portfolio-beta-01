import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.Welcome}>
      <h1>Franco Ortega</h1>
      <h2>Software Engineer</h2>
      <button onClick={onWelcomeClick}>Welcome</button>
    </div>
  );
};

export default Welcome;
