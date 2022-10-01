import Image from 'next/image';
import styles from './ProjectSummary.module.scss';

const ProjectSummary = ({ title, tech, summary, image }) => {
  const openCurly = '{';
  const closeCurly = '}';

  return (
    <li className={styles.ProjectSummary}>
      <h2>{title}</h2>
      <p className={styles.Tech}>
        {`${openCurly} `}
        {tech.reduce((prev, curr) => prev + ' - ' + curr)}
        {` ${closeCurly}`}
      </p>
      <Image
        src={image}
        alt=''
        //  width={100} height={100}
        layout='fill'
      />
      <p>{summary}</p>
    </li>
  );
};

export default ProjectSummary;
