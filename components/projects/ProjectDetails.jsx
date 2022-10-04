import displayTech from '../../utils/displayTech';
import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({ data }) => {
  return (
    <div className={styles.ProjectDetails}>
      <h2>Project: {data.title}</h2>
      <p>
        <h3>Tech</h3> {displayTech(data.tech)}
      </p>
      <p>
        <h3>Description</h3>
        {data.description}
      </p>
      <p>
        <h3>Learnings</h3>
        <ul>
          {data.learnings.map((learning, i) => (
            <li key={i}>{learning}</li>
          ))}
        </ul>
      </p>

      <div>
        <p>Website</p>
        {' - '}
        <p>GitHub</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
