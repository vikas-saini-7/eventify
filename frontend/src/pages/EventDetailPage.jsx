import React from 'react'
import {useParams} from 'react-router-dom'

const EventDetailPage = () => {
  const Params = useParams();
  return (
    <div>
      <h1>EventDetailPage</h1>
      <p>{Params.eventId}</p>
    </div>
  )
}

export default EventDetailPage