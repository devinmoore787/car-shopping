import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  Row,
  Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/cars',
    }).then(({ data }) => {
      setCars(data);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Cars</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/cars/create' }}>
            Create
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        {cars.map((car) => {
          return (
            <Col>
              <Card key={car.id}>
                <Card.Img variant="top" src="https://picsum.photos/300/180" />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>
                    <div>Year: {car.year}</div>
                    <div>Model: {car.model}</div>
                    <div>Make: {car.make}</div>
                    <div>Trim: {car.trim}</div>
                    <div>Color: {car.color}</div>
                    <div>Options: {car.options?.join(', ')}</div>
                  </Card.Text>
                  <Button variant="primary stretched-link" size="sm">
                    View Car
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
