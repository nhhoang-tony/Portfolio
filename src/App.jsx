import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PortfolioPage from './pages/Portfolio';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProjectDetailsPage from './pages/ProjectDetails';
import ContactsPage from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <PortfolioPage></PortfolioPage>,
      },
      {
        path: 'project',
        children: [
          {
            index: true,
            element: <ProjectDetailsPage></ProjectDetailsPage>,
          },
          {
            path: ':projectId',
            children: [
              {
                index: true,
                element: <ProjectDetailsPage></ProjectDetailsPage>,
              },
            ],
          },
        ],
      },
      {
        path: 'contacts',
        element: <ContactsPage></ContactsPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
