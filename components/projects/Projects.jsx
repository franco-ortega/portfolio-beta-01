import styles from './Projects.module.scss';
import projectsData from '../../data/projects';
import Project from '../project/Project';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <h2>Projects</h2>
      <p>These are my projects</p>
      <div>
        {projectsData.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            tech={project.tech}
            description={project.description}
            learnings={project.learnings}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
