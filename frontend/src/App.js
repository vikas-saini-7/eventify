import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventPage from './pages/EventsPage'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './pages/Root';
import EventDetailPage from './pages/EventDetailPage';
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
            element: <EventPage/>,
            loader: async () => {
              const response = await fetch('http://localhost:8080/events');
              if (!response.ok) {
                // ...
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          {
            path: ':eventId',
            element: <EventDetailPage/>
          },
          {
            path: 'new',
            element: <NewEventPage/>
          },
          {
            path: ':eventId/edit',
            element: <EditEventPage/>
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
