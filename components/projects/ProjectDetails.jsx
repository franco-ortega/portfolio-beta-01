import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({
  data
  // title, tech, description, learnings
}) => {
  return (
    <div className={styles.ProjectDetails}>
      <h2>Title: {data.title}</h2>
      <p>Tech: {data.tech}</p>
      <p>Description: {data.description}</p>
      <p>Learnings: {data.learnings}</p>
    </div>
  );
};

export default ProjectDetails;
