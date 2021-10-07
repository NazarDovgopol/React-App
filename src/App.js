import './App.css';
import Car from './Car/Car';
import React, { useState } from 'react';

function App() {
  const [cars, setCars] = useState(
    [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
    ]
  );

  const [pageTitle] = useState(
    'Hello React component!'
  );

  const [showCars, setShowCars] = useState(
    false
  );

  const toggleCarsHandler = () => {
    setShowCars(
      !showCars
    );
  }

  const onChangeName = (name, index) => {
    const car = cars[index]
    const allCars = [...cars]

    car.name = name
    allCars[index] = car

    setCars(
      allCars
    );
  }

  const deleteHandler = index => {
    const allCars = [...cars]
    allCars.splice(index, 1)

    setCars(
      allCars
    )
  }

  let listCars = null;

  if (showCars) {
    listCars = cars.map((car, index) => {

      return (
        <Car
          key = {index}
          name = {car.name}
          year = {car.year}
          onDelete = {() => deleteHandler(index)}
          onChangeName = {({target}) => onChangeName(target.value, index)}
        />
      )
    })
  }

  return (
    <div className = "App">
      <h1>{pageTitle}</h1>

      <button onClick = {toggleCarsHandler}>Toggle cars</button>

      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px'
      }}>
        {listCars}
      </div>
    </div>
  );
}

export default App;
