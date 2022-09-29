import Image from 'next/image';
import styles from './ProjectSummary.module.scss';

const ProjectSummary = ({ title, tech, summary, image }) => {
  console.log('IMAGE: ', image);
  const openCurly = '{';
  const closeCurly = '}';

  return (
    <div className={styles.ProjectSummary}>
      <h2>{title}</h2>
      <p className={styles.Tech}>
        {`${openCurly} `}
        {tech.reduce((prev, curr) => prev + ' - ' + curr)}
        {` ${closeCurly}`}
      </p>
      <Image src={image} alt='' width={200} height={100} />
      <p>{summary}</p>
    </div>
  );
};

export default ProjectSummary;
