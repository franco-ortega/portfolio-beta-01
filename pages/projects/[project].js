import ProjectDetails from '../../components/projects/ProjectDetails';
import projectData from '../../data/projects';

export default function ProjectDetailsPage({ data }) {
  return <ProjectDetails data={data} />;
}

export async function getServerSideProps(context) {
  try {
    const [data] = projectData.filter(
      (project) => project.path === context.params.project
    );

    return {
      props: { isConnected: true, data }
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false }
    };
  }
}
