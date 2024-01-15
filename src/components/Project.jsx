import { useNavigate } from 'react-router-dom';

export default function Project({ project, classes }) {
  const projectClasses =
    'cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-[#8feeff] transition-colors ease duration-500' +
    ' ' +
    classes;

  const navigate = useNavigate();

  function navToProjectDetailsPage(projectPath) {
    navigate(projectPath);
  }

  return (
    <div
      className={projectClasses}
      onClick={() => navToProjectDetailsPage(`/project/${project.id}`)}
    >
      <article className='h-full flex flex-col justify-between'>
        <div className='h-[35vh] overflow-hidden'>
          <img
            className='w-full h-[35vh] object-cover hover:scale-[1.07] transition-transform ease duration-500'
            src={`/static/img/${project.portfolioPhoto}`}
          ></img>
        </div>

        <div className='grow m-4 py-4'>
          <h3 className='font-[Raleway] text-[#8feeff] text-2xl font-bold my-3 mx-0'>
            {project.portfolioName}
          </h3>
          <p className='m-4 text-lg font-[Bricolage Grotesque]'>
            {project.portfolioDescription}
          </p>
        </div>
      </article>
    </div>
  );
}
