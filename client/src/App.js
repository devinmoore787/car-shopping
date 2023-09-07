import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: 'Honda CR-V',
      year: 2020,
      model: 'Honda',
      make: 'CR-V',
      trim: 'EX-L',
      color: 'Blue',
      options: ['Leather', 'Sun Roof', 'Alloy Rims'],
    },
    {
      id: 2,
      name: 'Honda Civic',
      year: 2007,
      model: 'Honda',
      make: 'Civic',
      trim: 'EX',
      color: 'Black',
      options: ['Sun Roof', 'Alloy Rims', 'Rust'],
    },
  ]);

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
        {cars.map((car) => {
          return (
            <Col>
              <Card key={car.id}>
                <Card.Img variant="top" src="https://placehold.co/300x180" />
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
