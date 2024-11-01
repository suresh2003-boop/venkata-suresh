import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleResponse = (response) => {
    console.log('Facebook login success:', response);
    setUserName(response.name); // Get the user's name from the response object
    setIsLoggedIn(true);
  };

  const handleFailure = (error) => {
    console.log('Facebook login failed:', error);
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <FacebookLogin
            appId="1218356455947486"  // Replace with your actual Facebook App ID
            autoLoad={false}
            fields="name,email,picture"
            callback={handleResponse}
            onFailure={handleFailure}
          />
          <br />
        </>
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </>
  );
}

export default FacebookLoginComponent;