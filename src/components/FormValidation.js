import React, { useState } from 'react';

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@gmail.com')) {
      setError('Email must be a Gmail address.');
    } else {
      setError('');
      // Submit form
    }
  };

  return (
    <div>
      <h2>Email Validation Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default FormValidation;
