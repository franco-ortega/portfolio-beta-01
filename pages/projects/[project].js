import ProjectDetails from '../../components/projects/ProjectDetails';
import projectData from '../../data/projects';

export default function ProjectDetailsPage({ data }) {
  return <ProjectDetails data={data} />;
}

export async function getServerSideProps(context) {
  try {
    console.log('PARAMS: ', context.params.project);

    const data = projectData.filter(
      (project) => project.path === context.params.project
    )[0];
    console.log(data);

    // const raw = await db
    //   .collection('trays')
    //   .findOne({ _id: ObjectId(context.params.id) });

    // const data = await JSON.parse(JSON.stringify(raw));

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
