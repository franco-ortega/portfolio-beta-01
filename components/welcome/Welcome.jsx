import styles from './Welcome.module.scss';

const Welcome = ({ fadeOut, onWelcomeClick }) => {
  return (
    <div className={`${styles.Welcome} ${fadeOut && styles.FadeOut}`}>
      <main>
        <section>
          <div>
            <h1>Franco Ortega</h1>
            <h2>Software Engineer</h2>
          </div>
          <button onClick={onWelcomeClick}>Welcome</button>
        </section>
      </main>
    </div>
  );
};

export default Welcome;
