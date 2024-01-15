function DefaultPage({ title, children }) {
  return (
    <div className='text-center py-12'>
      <h3 className='font-[Raleway] text-[#8feeff] text-2xl font-bold my-3 mx-0'>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default DefaultPage;
