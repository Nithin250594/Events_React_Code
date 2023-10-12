// Write your code here

import './index.css'

const selectedImageStatus = {
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  yetToRegister: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {selectedEvent} = props
  const {registrationStatus} = selectedEvent

  const registered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const notYetRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-registered-image"
      />
      <p className="yet-to-registered-text">
        A live Performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const registrationClosed = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="yet-to-registered-image"
      />
      <h1 className="registration-closed-title">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (registrationStatus) {
    case selectedImageStatus.registered:
      return registered()
    case selectedImageStatus.yetToRegister:
      return notYetRegistered()
    case selectedImageStatus.registrationClosed:
      return registrationClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
