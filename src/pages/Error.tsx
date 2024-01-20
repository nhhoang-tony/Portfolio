import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import DefaultPage from '../components/Default';

function ErrorPage({ customTitle, customMessage }) {
  let title = 'An error occurred';
  let message = 'Something went wrong!';

  if (customTitle === '' && customMessage === '') {
    const error: any = useRouteError();

    if (error.status === 500) {
      message = error.data.message;
    }

    if (error.status === 404) {
      title = 'Under construction...';
      message = 'Come back later for more contents!';
    }
  } else {
    title = customTitle;
    message = customMessage;
  }

  return (
    <>
      {!customTitle && !customMessage && <Header></Header>}
      <DefaultPage title={title}>
        <p className='m-4 font-[Bricolage Grotesque]'>{message}</p>
      </DefaultPage>
    </>
  );
}

export default ErrorPage;
