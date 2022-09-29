import styles from './Projects.module.scss';
import projectsData from '../../data/projects';
import ProjectSummary from './ProjectSummary';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <h2>Projects</h2>
      <p>These are my projects</p>
      <div>
        {projectsData.map((project, i) => (
          <ProjectSummary
            key={i}
            title={project.title}
            tech={project.tech}
            summary={project.summary}
            image={'project.image'}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
