import Button from '../buttons/Button';
import styles from './Welcome.module.scss';

const Welcome = ({ fadeOut, onWelcomeClick }) => {
  const welcomeText = 'Welcome';
  return (
    <div className={`${styles.Welcome} ${fadeOut && styles.FadeOut}`}>
      <main>
        <section>
          <div>
            <h1>Franco Ortega</h1>
            <h2>Software Engineer</h2>
          </div>
          <Button handler={onWelcomeClick} text={welcomeText} />
        </section>
      </main>
    </div>
  );
};

export default Welcome;
