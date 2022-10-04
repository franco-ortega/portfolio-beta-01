import styles from './Button/module.scss';

const Button = ({ text, handler }) => {
  return (
    <button className={styles.Button} onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
