import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { EmptyState } from '../pages/EmptyState/EmptyState';
import { JobSearch } from '../pages/JobSearch/JobSearch';
import { JobVacancy } from '../pages/JobVacancy/JobVacancy';
import { Favorites } from '../pages/Favorites/Favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <JobSearch />, index: true },
      { path: 'vacancy/:vacancyId', element: <JobVacancy /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'emptystate', element: <EmptyState /> },
    ],
  },
]);
