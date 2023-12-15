import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import News from './components/NewsApi';
import { Stopwatch } from './components/Stopwatch';
import { MyForm } from './components/Form';
import Counter from './components/Counter';

function App() {
  // const[image, setImage] = useState(null)

  // useEffect(() => {
  //   fetch("https://random.dog/woof.json", {
  //     method: "GET",
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setImage(data.url);
  //     console.log(data);
  //   })
  //   .catch((error) => console.log(error));
  // })
  // const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      {/* <img src={image}/> */}
      <Link to="/page1">
        Page 1
      </Link>
      <Link to="/page2">
        Page 2
      </Link>
      {/* <News/> */}
      <MyForm />
      <Stopwatch />
      <Counter />
    </>
  );
}

export default App;
