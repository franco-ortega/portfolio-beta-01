import displayTech from '../../utils/displayTech';
import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({ data }) => {
  return (
    <div className={styles.ProjectDetails}>
      <h2>Title: {data.title}</h2>
      <p>Tech: {displayTech(data.tech)}</p>
      <p>Description: {data.description}</p>
      <ul>
        Learnings:
        {data.learnings.map((learning, i) => (
          <li key={i}>{learning}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
