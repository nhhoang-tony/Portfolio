import { Link, NavLink } from 'react-router-dom';

function Contacts() {
  const contactTitleClasses =
    'text-[#ffffff] font-[Raleway] text-lg sm:text-2xl font-bold my-2';
  const contactBodyClasses =
    'ml-2 text-2xl font-medium font-[Bricolage Grotesque] inline-block whitespace-nowrap';
  const hoverText =
    'text-[#8feeff] hover:text-[#406ab7] active:text-[#406ab7] transition-colors ease duration-200 cursor-pointer';

  return (
    <div className='py-12'>
      <h3 className='text-center font-[Raleway] text-[#8feeff] text-3xl font-bold mb-3'>
        Contact information
      </h3>
      <div className='flex flex-col my-12 p-4 sm:p-6 bg-[#17161b] rounded-2xl max-w-[90%] sm:max-w-[80%] w-[600px] mx-auto'>
        <p className={contactTitleClasses}>
          Email:
          <span className={`${hoverText} ${contactBodyClasses}`}>
            <Link
              to='mailto:nhhoang.tony@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              nhhoang.tony@gmail.com
            </Link>
          </span>
        </p>
        <p className={contactTitleClasses}>
          Phone:
          <span className={`${hoverText} ${contactBodyClasses}`}>
            <Link
              to='tel:+61426674746'
              target='_blank'
              rel='noopener noreferrer'
            >
              +61 426 674 746
            </Link>
          </span>
        </p>
        <p className={contactTitleClasses}>
          Location:
          <span className={contactBodyClasses}>Gold Coast, Australia</span>
        </p>
        <p className={contactTitleClasses}>
          GitHub:
          <span className={contactBodyClasses}>
            <Link
              className={hoverText}
              to='https://www.github.com/nhhoang-tony'
              target='_blank'
              rel='noopener noreferrer'
            >
              /nhhoang-tony
            </Link>
          </span>
        </p>
        <p className={contactTitleClasses}>
          LinkedIn:
          <span className={contactBodyClasses}>
            <Link
              className={hoverText}
              to='https://www.linkedin.com/in/tonynguyen61'
              target='_blank'
              rel='noopener noreferrer'
            >
              /in/tonynguyen61
            </Link>
          </span>
        </p>
        <p className='text-center my-4'>
          <NavLink to='/meet' end>
            <button className='mr-8 bg-white border-solid border-[4px] border-white h-16 w-32 md:w-36 text-xl text-[#17161b] rounded-xl cursor-pointer hover:bg-[#406ab7] hover:border-[#406ab7] active:bg-[#406ab7] active:border-[#406ab7] transition-colors ease duration-200'>
              Meet
            </button>
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
