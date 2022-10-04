import styles from './Projects.module.scss';
import projectsData from '../../data/projects';
import ProjectSummary from './ProjectSummary';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <h2>Projects</h2>
      <p>These are my projects.</p>
      <ul>
        {projectsData.map((project, i) => (
          <ProjectSummary
            key={i}
            title={project.title}
            tech={project.tech}
            path={project.path}
            summary={project.summary}
            image={`/images/${project.image}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
