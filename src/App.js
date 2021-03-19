import './App.css';
import React from 'react';

const App = () => {
  const [lat, setLat] = React.useState([]);
  const [long, setLong] = React.useState([]);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log('Latitude is:', lat);
    console.log('Longitude is:', long);
  }, [lat, long]);

  return <div className='App'></div>;
};
export default App;
