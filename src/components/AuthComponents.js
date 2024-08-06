import React, { useState } from 'react';

const AuthComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div>
      <h1>Authentication Component</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome back! have a nice day.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthComponent;
