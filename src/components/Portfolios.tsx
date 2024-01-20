import Project from './Project';
import projects from '../../projects-details.json';

export default function Portfolios() {
  let projectClasses: string =
    'min-w-full sm:min-w-[350px] bg-[#17161b] rounded-2xl overflow-hidden text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)] flex-[1_1_calc(25%-1rem)]';
  return (
    <div className='flex flex-wrap gap-16 mx-auto pt-12 overflow-y-scroll max-w-[80%]'>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          classes={projectClasses}
        ></Project>
      ))}
      <div className={`h-0 ${projectClasses}`}></div>
      <div className={`h-0 ${projectClasses}`}></div>
    </div>
  );
}
