import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  
  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <h2>Current Weather</h2>
      <p style={temperatureStyle}>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
