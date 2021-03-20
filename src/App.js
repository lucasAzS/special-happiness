import './App.css';
import React from 'react';

const App = () => {
  const [lat, setLat] = React.useState([]);
  const [long, setLong] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className='App'>
      <h1>OI</h1>
    </div>
  );
};

export default App;
