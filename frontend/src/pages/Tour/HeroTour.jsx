import React from "react";
import SearchBar from "./SearchBar";
import GfGWeatherApp from "./Services/weather";

const image = {
  backgroundImage:
    "url('https://static.wanderon.in/wp-content/uploads/2023/07/daria-dyachenko-d-ti9zww3o0-unsplash-min.jpg')",
  height: "500px",
  backgroundPosition: "50%",
  backgroundSize: "cover", // Ensure the background image covers the container
};

const HeroTour = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover" style={image}>
        <div className="flex h-full items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center w-3/4"> {/* Adjusted width */}
            <h2
              className="mb-5 text-6xl font-bold text-black"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bolder",
              }}
            >
              Do More With ReachMe Travels
            </h2>
            <h4
              className="mt-5 mb-6 text-xl uppercase animate-bounce text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "normal",
                border: "solid 1px white",
                textShadow: "3px 1px black",
                padding:"10px"
              }}
            >
              an island awaits you <br />
              Discover Sri Lanka
            </h4>
            <div className="mt-8 w-180"> {/* Full width for the search bar */}
              <SearchBar />
            </div>
          </div>
          <div className="ml-10 mr-20 mb-20">
            <GfGWeatherApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTour;