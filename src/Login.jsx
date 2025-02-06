import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import './index.css';

function Login({ users, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => 
      (user.email === email) && user.password === password
    );

    if (user) {
      onLogin(user); // Call the login function passed from parent
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-form">
      <h2 className="text-center text-primary">Login Here</h2>
      {errorMessage && <div className="error-message text-danger">{errorMessage}</div>}
      <Form onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            id="loginEmail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Label for="loginEmail">Email</Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="loginPassword"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Label for="loginPassword">Password</Label>
        </FormGroup>
        {' '}
        <Button color="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;