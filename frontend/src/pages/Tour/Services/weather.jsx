import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Oval } from 'react-loader-spinner';

const GfGWeatherApp = ({ destination }) => {
  const [input, setInput] = useState('');
  const [currentLocation, setCurrentLocation] = useState(destination || '');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
    season: ''
  });

  const toDateFunction = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const WeekDays = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday'
    ];
    const currentDate = new Date();
    return `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
  };

  const getSeason = (month, lat) => {
    month = month + 1;
    if (lat >= 0) {
      if (month === 12 || month === 1 || month === 2) return 'Winter';
      if (month >= 3 && month <= 5) return 'Spring';
      if (month >= 6 && month <= 8) return 'Summer';
      return 'Autumn';
    } else {
      if (month >= 6 && month <= 8) return 'Winter';
      if (month >= 9 && month <= 11) return 'Spring';
      if (month === 12 || month <= 2) return 'Summer';
      return 'Autumn';
    }
  };

  const fetchWeather = async (location) => {
    setWeather({ ...weather, loading: true });
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
    
    await axios.get(url, {
      params: {
        q: location,
        units: 'metric',
        appid: api_key,
      },
    })
      .then((res) => {
        const lat = res.data.coord.lat;
        const month = new Date().getMonth();
        setWeather({
          data: res.data,
          loading: false,
          error: false,
          season: getSeason(month, lat)
        });
      })
      .catch(() => {
        setWeather({ ...weather, data: {}, error: true, loading: false });
      });
  };

  // Fetch weather when component mounts with the destination prop or when it changes
  useEffect(() => {
    if (destination) {
      setCurrentLocation(destination);
      fetchWeather(destination);
    }
  }, [destination]);

  // Fetch weather when user presses Enter in the input field
  const handleInputSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (input.trim()) {
        setCurrentLocation(input);
        fetchWeather(input);
        setInput('');
      }
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-transparent rounded-3xl shadow-lg p-6 mt-16 text-center">
      <h1 className="text-2xl font-semibold text-purple-500 mb-4">
        ReachMe Weather App
      </h1>

      {/* Conditionally render input only if no destination is passed */}
      {!destination && (
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full p-3 text-lg text-gray-700 bg-gray-30 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            placeholder="Enter City Name..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={handleInputSearch}  // Search on Enter
          />
        </div>
      )}

      {weather.loading && (
        <div className="flex justify-center items-center my-4">
          <Oval color="black" height={80} width={80} />
        </div>
      )}

      {weather.error && (
        <div className="text-red-500 flex flex-col items-center">
          <FontAwesomeIcon icon={faFrown} size="2x" />
          <span className="mt-2 text-lg">City not found</span>
        </div>
      )}

      {weather.data.main && (
        <div>
          <h2 className="text-xl font-bold text-gray-700">
            {weather.data.name}, <span>{weather.data.sys.country}</span>
          </h2>
          <p className="text-gray-500">{toDateFunction()}</p>
          <div className="flex items-center justify-center mt-4 text-gray-700">
            <img
              className="w-16 h-16"
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            <span className="text-4xl font-bold">
              {Math.round(weather.data.main.temp)}
              <sup className="text-xl">°C</sup>
            </span>
          </div>
          <p className="text-lg font-bold mt-2 text-gray-600">
            {weather.data.weather[0].description.toUpperCase()}
          </p>
          <p className="text-lg text-gray-600">
            Wind Speed: {weather.data.wind.speed} m/s
          </p>
          <p className="text-lg font-bold mt-2 text-gray-700">
            Current Season: {weather.season}
          </p>
        </div>
      )}
    </div>
  );
};

export default GfGWeatherApp;