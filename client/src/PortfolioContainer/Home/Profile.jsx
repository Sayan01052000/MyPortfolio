import React from 'react'

const Profile = () => {
  return (
    <div className="Profile-container">
        <div className="Profile-Parent">
            <div className="Profile-Details">
              
                <div className="Colz">
                  <a href ='#'>
                    <i className='fa fa-facebook-square'>
                    </i>
                  </a>
                  <a href ='#'>
                    <i className='fa fa-instagram'>
                    </i>
                  </a>
                  <a href ='#'>
                    <i className='fa fa-google-plus-square'>
                    </i>
                  </a>
                  <a href ='https://www.linkedin.com/in/sayannandy04/'>
                    <i className='fa fa-linkedin-square'>
                    </i>
                  </a>
                </div>
                <div className="profile-details-name">
                  <span className="Primary Text">
                    {" "}
                    Hello, I am <span className="Highlighted-text">a kalo vodor er bichi</span>
                  </span>
                </div>
                <div className="profile-details-role">
                  <span class name='primary-text'>
                    {" "}
                    <h1>

                    </h1>
                  </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile