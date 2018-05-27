import React from 'react';

export const DashBoard = () => {

   return (
    <div>
      <div className = "main_container">
          <div className = "img1">
              <div className = "dashboard_content">
                <h1 style = {{fontSize: '3.5em', color: 'rgb(154 154 154)'}}>Welcome</h1>
                  <div className = "main_dashboard_content">
                    <p> Login to take your attendance, it is important to note that this Portal is for student only.
                    </p>
                    <p>If you are a Lecturer or Staff, please click <a href="#">here..</a></p>
                    <p>Its simple and easy, just <a href="#"> sign-in</a> here to continue</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
