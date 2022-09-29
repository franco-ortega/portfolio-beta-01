import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({ title, tech, description, learnings }) => {
  return (
    <div className={styles.ProjectDetails}>
      <h2>{title}</h2>
      <p>{tech}</p>
      <p>{description}</p>
      <p>Learnings: {learnings}</p>
    </div>
  );
};

export default ProjectDetails;
