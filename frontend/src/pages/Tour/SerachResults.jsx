import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import TourNav from "../../components/navbar/TourNav";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Oval } from 'react-loader-spinner';
import GfGWeatherApp from "./Services/weather";

const image = {
  backgroundImage:
    "url('https://static.wanderon.in/wp-content/uploads/2023/07/daria-dyachenko-d-ti9zww3o0-unsplash-min.jpg')",
  height: "300px",
  backgroundPosition: "50%",
};

const SearchResults = () => {
  const { destination, duration, maxsize } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredTours, setTour] = useState([]);
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
    season: ''
  });

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get("/tours");
        const tours = response.data.filter((tour) => {
          return (
            tour.cities.split(",").includes(destination) &&
            tour.duration == duration &&
            tour.groupCount == maxsize
          );
        });
        setTour(tours);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTours();
  }, [destination, duration, maxsize]);

  const getSeason = (month, lat) => {
    month = month + 1; // Adjust month
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

  useEffect(() => {
    const fetchWeather = async () => {
      setWeather({ ...weather, loading: true });
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
      try {
        const res = await axios.get(url, {
          params: {
            q: destination,
            units: 'metric',
            appid: api_key,
          },
        });
        const lat = res.data.coord.lat;
        const month = new Date().getMonth();
        setWeather({
          data: res.data,
          loading: false,
          error: false,
          season: getSeason(month, lat)
        });
      } catch (err) {
        setWeather({ ...weather, data: {}, error: true, loading: false });
      }
    };
    
    if (destination) {
      fetchWeather();
    }
  }, [destination]);

  return (
    <div>
      {/* Image and Header */}
      <div className="">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={image}
        >
          <div class="flex h-full items-center justify-center text-center">
            <div>
              <h2 class="mb-5 text-6xl font-bold text-black"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "bolder" }}>
                Search Results
              </h2>
              <div className="mt-12 w-1/2 mr-auto ml-auto">
                <h4 class="mt-5 mb-6 text-xl uppercase animate-bounce text-white text-center"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "normal", border: "solid 1px  white", textShadow: "3px 1px black" }}>
                  An island awaits you <br />
                  Discover Sri Lanka
                </h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="ml-10 mr-20 mb-20">
        <GfGWeatherApp destination={destination} />
      </div>
      
      {/* Navigated Menu */}
      <nav class="bg-grey-light w-full rounded-md pl-20 pt-10">
        <ol class="list-reset flex">
          <li>
            <Link
              to={"/"}
              class="text-purple-600 transition duration-150 ease-in-out hover:text-purple-600 focus:text-purple-600 active:text-purple-700"
            >
              Home
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li>
            <Link
              to={"#"}
              class="text-purple-600 transition duration-150 ease-in-out hover:text-purple-600 focus:text-purple-600 active:text-purple-700"
            >
              Tour Packages
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li class="text-neutral-500">Explore Sri Lanka</li>
        </ol>
      </nav>
      <TourNav />

      {/* Search Results */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl mb-10 ml-2">Results Found : {filteredTours.length}</h1>
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <div className="bg-white">
            {filteredTours.length !== 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {filteredTours.map((tours) => (
                  <div key={tours._id} className="group relative rounded-t-3xl shadow-2xl rounded-b-xl border-2">
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80">
                      <img src={tours.img} alt="Tour" className="h-full w-full object-cover object-center rounded-3xl lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-4 flex justify-between p-3">
                      <h3 className="text-2xl font-bold text-gray-700">
                        <Link to={`/tours/${tours._id}`}>
                          <span aria-hidden="true" className="absolute inset-0 rounded-t-3xl " />
                          {tours.name}
                        </Link>
                        <p className="text-lg font-medium text-gray-900">{tours.duration} days</p>
                      </h3>
                    </div>
                    <div className="flex flex-row mr-2 space-x-3 items-center justify-center">
                      <Link to={`/tours/${tours._id}`}>
                        <button className="ml-auto mr-auto text-center mb-5 bg-purple-500 hover:bg-purple-700 transition text-white font-bold p-3 px-5 shadow-2xl border rounded-3xl">Discover More</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-lg text-center">No Results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;