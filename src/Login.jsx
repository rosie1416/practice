import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import './index.css';

function Login() {
  return (
    <div className="login-form">
            <h2 className="text-center text-primary">Login here</h2>
    <Form>
      <FormGroup floating>
        <Input
          id="loginEmail"
          name="email"
          placeholder="Email"
          type="email"
          required // Add required attribute for validation
        />
        <Label for="loginEmail">
          Email
        </Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input
          id="loginPassword"
          name="password"
          placeholder="Password"
          type="password"
          required // Add required attribute for validation
        />
        <Label for="loginPassword">
          Password
        </Label>
      </FormGroup>
      {' '}
      <Button color="primary">
        Login
      </Button>
    </Form>
    </div>
  );
}

export default Login;