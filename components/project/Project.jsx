import styles from './Project.module.scss';

const Project = ({ title, tech, desciption, learnings }) => {
  return (
    <div className={styles.Project}>
      <h2>{title}</h2>
      <p>{tech}</p>
      <p>{desciption}</p>
      <p>Learnings: {learnings}</p>
    </div>
  );
};

export default Project;
