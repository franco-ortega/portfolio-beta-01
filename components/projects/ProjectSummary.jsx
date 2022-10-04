import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './ProjectSummary.module.scss';

const ProjectSummary = ({ title, tech, path, summary, image }) => {
  const router = useRouter();

  const openCurly = '{';
  const closeCurly = '}';

  const onDetailsClick = () => {
    console.log('details clicked: ', path);
    router.push(`/projects/${path}`);
  };

  return (
    <button className={styles.ProjectSummary} onClick={onDetailsClick}>
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
        priority
        layout='fill'
      />
      <p>{summary}</p>
      <p>Click here for more details.</p>
    </button>
  );
};

export default ProjectSummary;
