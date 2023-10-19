import React, { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CreateForm() {
  // State to hold the form values
  const [car, setCar] = useState({
    name: '',
    make: '',
    model: '',
    year: '',
    color: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can send the car data to your API or perform any other actions here
    console.log('Car data:', car);

    // Clear the form after submission
    setCar({
      name: '',
      make: '',
      model: '',
      year: '',
      color: '',
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Welcome To Moore Car Emporium</h2>
        </Col>
      </Row>

      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/cars' }}>
          Cars
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/cars/create' }}>
          Create
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}
