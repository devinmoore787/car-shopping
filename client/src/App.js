import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
    <div>
      {cars.map((car) => {
        return (
          <div style={{ marginBottom: '20px' }} key={car.id}>
            <div>Car: {car.name}</div>
            <div>Year: {car.year}</div>
            <div>Model: {car.model}</div>
            <div>Make: {car.make}</div>
            <div>Trim: {car.trim}</div>
            <div>Color: {car.color}</div>
            <div>Options: {car.options?.join(', ')}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
