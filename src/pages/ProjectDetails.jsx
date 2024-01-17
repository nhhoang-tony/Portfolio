import { useEffect } from 'react';
import { NavLink, Link, useNavigate, useParams } from 'react-router-dom';
import projectsDetails from '../../projects-details.json';
import ErrorPage from './Error';
import Button from '../components/UI/Button';
import appStoreImg from '../assets/app-store.svg';
import googlePlayImg from '../assets/google-play.svg';

function ProjectDetailsPage() {
  let projectClasses =
    'min-w-full px-4 sm:min-w-[350px] overflow-hidden flex-[1_1_calc(50%-1rem)]';
  const params = useParams();
  const navigate = useNavigate();

  const currentProject = projectsDetails.find(
    (project) => project.id === params.projectId
  );

  useEffect(() => {
    if (!params.projectId) {
      navigate('/project/resume');
    }
  });

  return (
    <>
      {!currentProject && (
        <ErrorPage
          customTitle='Project under construction... '
          customMessage='Come back later!'
        ></ErrorPage>
      )}

      {currentProject && (
        <div className='flex flex-wrap mx-auto pb-12 px-4 overflow-y-scroll w-full max-w-7xl'>
          <div className={`pt-14 ${projectClasses}`}>
            <img
              src={`/static/img/${currentProject.detailPhoto}`}
              loading='lazy'
            ></img>
          </div>

          <div className={`pt-12 ${projectClasses}`}>
            <div className='font-[Raleway] text-[#8feeff] text-5xl font-bold mb-6 mx-0'>
              {currentProject.detailName}
            </div>

            <div className='mb-6 text-2xl'>
              {currentProject.detailDescription1}
            </div>

            {currentProject.detailDescription2 && (
              <div className='mb-6 text-2xl'>
                {currentProject.detailDescription2}
              </div>
            )}

            {currentProject.id === 'resume' && (
              <div className='mb-6 text-2xl'>
                The original cloud resume challenge by
                <Link
                  className='ml-2 text-[#8feeff] text-2xl transition-colors ease duration-200 hover:text-[#406ab7] active:text-[#406ab7]'
                  to='https://cloudresumechallenge.dev/instructions/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Forrest Brazeal
                </Link>
              </div>
            )}

            {currentProject.id === 'vbreathe' && (
              <div className='mb-6 text-2xl'>
                For more information, visit
                <Link
                  className='ml-2 text-[#8feeff] text-2xl transition-colors ease duration-200 hover:text-[#406ab7] active:text-[#406ab7]'
                  to='https://vbreathe.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  VBreathe website
                </Link>
              </div>
            )}

            {currentProject.id === 'vbreathe' && (
              <div className='mb-6'>
                <Link
                  to={currentProject.viewLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='mr-8 bg-white h-16 w-32 md:w-36 text-2xl text-white rounded-xl cursor-pointer hover:bg-[#406ab7] active:bg-[#406ab7] transition-colors ease duration-200'>
                    <img
                      className='h-16 w-32 md:w-36'
                      src={appStoreImg}
                      loading='lazy'
                    />
                  </Button>
                </Link>
                <Link
                  to={currentProject.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='bg-white h-16 w-32 md:w-36 text-2xl text-white rounded-xl cursor-pointer hover:bg-[#406ab7] active:bg-[#406ab7] transition-colors ease duration-200'>
                    <img
                      className='h-16 w-32 md:w-36'
                      src={googlePlayImg}
                      loading='lazy'
                    />
                  </Button>
                </Link>
              </div>
            )}

            {currentProject.id !== 'vbreathe' && (
              <div className='mb-6'>
                <Link
                  to={currentProject.viewLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='mr-8 bg-white border-solid border-[4px] border-white h-16 w-32 md:w-36 text-3xl text-[#17161b] rounded-xl cursor-pointer hover:bg-[#406ab7] hover:border-[#406ab7] active:bg-[#406ab7] active:border-[#406ab7] transition-colors ease duration-200'>
                    View
                  </Button>
                </Link>
                <Link
                  to={currentProject.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='bg-transparent border-solid border-[4px] border-white h-16 w-32 md:w-36 text-3xl text-white rounded-xl cursor-pointer hover:bg-[#406ab7] hover:border-[#406ab7] active:bg-[#406ab7] active:border-[#406ab7] transition-colors ease duration-200'>
                    Repo
                  </Button>
                </Link>
              </div>
            )}

            <div className='font-[Raleway] text-[#8feeff] text-4xl font-bold mb-4 pt-8 mx-0'>
              Technology
            </div>
            <div className='mb-8'>
              {currentProject.technology.map((technology) => (
                <div
                  key={Object.keys(technology)[0]}
                  className={`flex justify-between border-solid border-white ${
                    Object.keys(technology)[0] === 'Platform'
                      ? 'border-y-[1px]'
                      : 'border-b-[1px]'
                  }`}
                >
                  <div className='my-2 text-lg font-bold'>
                    {Object.keys(technology)[0]}
                  </div>
                  <div className='my-2 text-lg text-right'>
                    {Object.values(technology)[0]}
                  </div>
                </div>
              ))}
            </div>

            <div className='font-[Raleway] text-[#8feeff] text-4xl font-bold mb-4 pt-8 mx-0'>
              Features
            </div>
            <div className='mb-6'>
              <ul className='ml-8'>
                {currentProject.features.map((feature) => (
                  <li key={feature} className='list-disc mb-2 text-lg'>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectDetailsPage;
