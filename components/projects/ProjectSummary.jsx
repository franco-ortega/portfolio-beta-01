import Image from 'next/image';
import styles from './ProjectSummary.module.scss';
import photo from '/public/images/weatherbeats.png';

const ProjectSummary = ({ title, tech, summary, image }) => {
  return (
    <div className={styles.ProjectSummary}>
      <h2>{title}</h2>
      <p>{tech}</p>
      <Image src={photo} alt='' />
      <p>{summary}</p>
    </div>
  );
};

export default ProjectSummary;
