import React, { useState } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import DatePicker from 'react-datepicker'; // Import the date picker
import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import custom CSS

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date(), // Initialize date state
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date }); // Update date state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      setSuccessMessage('');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSuccessMessage('Your message has been sent successfully!');
    setErrorMessage('');
    setFormData({ name: '', email: '', message: '', date: new Date() }); // Reset the form
  };

  return (
    <div className="support-page">
      <h2 className="text-center">Support Page</h2>
      <p className="text-center">If you need assistance, please fill up the contact us form.</p>
      <Container className="mt-5">
        <h4 className="text-center">Contact Us</h4>
        {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
        {successMessage && <Alert color="success">{successMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date </Label><br />
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              className="form-control" // Bootstrap styling
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <Button color="primary" type="submit" className="btn-block">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Support;