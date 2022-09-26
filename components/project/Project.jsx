import styles from './Project.module.scss';

const Project = ({ title, tech, description, learnings }) => {
  return (
    <div className={styles.Project}>
      <h2>{title}</h2>
      <p>{tech}</p>
      <p>{description}</p>
      <p>Learnings: {learnings}</p>
    </div>
  );
};

export default Project;
