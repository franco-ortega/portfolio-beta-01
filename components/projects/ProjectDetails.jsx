import { useRouter } from 'next/router';
import displayTech from '../../utils/displayTech';
import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({ data }) => {
  const router = useRouter();

  const backArrow = '<-';

  const onBackClick = () => {
    router.push('/projects');
  };

  return (
    <div className={styles.ProjectDetails}>
      <p>
        <h2>Project: {data.title}</h2>
        <button onClick={onBackClick}>{backArrow} Back to Projects</button>
      </p>
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
