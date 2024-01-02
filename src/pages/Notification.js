import React from 'react'

const Notifications = () => {
  return (
    <div className='mt-5'>
        <h2 style={{
          textAlign: 'center',
          color:"green",
          paddingTop: "20px",
        }}>Notifications </h2>
        <div class="container mt-5 mb-3">
        <div id="notification" class="alert alert-success alert-dismissible fade show" role="alert">
        <p class="message">This is a notification message.</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <div id="notification" class="alert alert-success alert-dismissible fade show" role="alert">
        <p class="message">This is a notification message.</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <div id="notification" class="alert alert-success alert-dismissible fade show" role="alert">
        <p class="message">This is a notification message.</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    </div>
    </div>
    
  )
}

export default Notifications