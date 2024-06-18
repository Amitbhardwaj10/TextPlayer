import React from 'react'

function Alert() {
  



    return (
      <div className="alert">
          <div className="alert-content">
              <i className={`bx ${alertIconType}`}></i>
              <div className="message">
                  <span className="text text-1">{alertType}</span>
                  <span className="text text-2">{alertMessage}</span>
              </div>
          </div>
          <div className="progress "></div>
      </div>
  )
}

export default Alert