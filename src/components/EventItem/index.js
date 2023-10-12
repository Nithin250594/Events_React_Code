// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, clickImage, isActive} = props
  const {imageUrl, id, name, location} = eventDetails

  const imageOnClick = () => {
    clickImage(id)
  }

  const highlighted = isActive ? 'highlighted-green' : null

  return (
    <li className="each-event-box">
      <button
        type="button"
        className="image-list-buttons"
        onClick={imageOnClick}
      >
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${highlighted}`}
        />
      </button>

      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
