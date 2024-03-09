import React from 'react'
import {Link} from 'react-router-dom'

const EVENTS = [
  {
    id: 'e1',
    title: 'event 1'
  },
  {
    id: 'e2',
    title: 'event 2'
  },
  {
    id: 'e3',
    title: 'event 3'
  },
]

const EventPage = () => {
  return (
    <div>
      <h1>EventPage</h1>
      <main>
        <ul>
          {EVENTS.map((event) => (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default EventPage