import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventsPage, {loader as eventsLoader} from './pages/EventsPage'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './pages/Root';
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'events',
        element: <EventsRootLayout/>,
        children: [
          {
            index: true,
            element: <EventsPage/>,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage/>,
              },
              {
                path: 'edit',
                element: <EditEventPage/>
              },
            ]
          },
          {
            path: 'new',
            element: <NewEventPage/>
          },
        ]
      }
      
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
