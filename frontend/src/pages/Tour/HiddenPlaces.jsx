import React from "react";

const HiddenPlaces = () => {
  return (
    
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
      <p class="uppercase text-5xl">
        get a brief about Hidden beauties in srilanka
      </p>
      {/* <!-- first --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <img
          src="https://media.istockphoto.com/id/952716620/photo/happy-smiling-woman-looks-out-from-window-traveling-by-train-on-most-picturesque-train-road-in.jpg?s=612x612&w=0&k=20&c=UDm48ZaBsua2eribAC2fyvOjeHJZeUE0DwCUnfcVbxE="
          alt=""
        ></img>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Ella</p>
          <p>
          Ella is a picturesque village in Sri Lanka's hill country, known for its stunning landscapes and vibrant tea plantations. Surrounded by lush greenery, it offers breathtaking views from Ella Rock and the iconic Nine Arches Bridge. Visitors can explore beautiful waterfalls like Diyaluma and enjoy hiking trails through tea estates. Ella's cool climate and charming atmosphere make it a perfect retreat for nature lovers.
            
          </p>
        </div>
      </div>
      {/* <!-- second --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <div class="md:order-last">
          <img
            src="https://media.istockphoto.com/id/1131422879/photo/peacock-yala-national-park-sri-lanka.jpg?s=612x612&w=0&k=20&c=lMuuvuV3T-f-EortOcpbgeod5uNcScbjcBKQ9i19VrA="
            alt=""
          ></img>
        </div>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Kumana National Park</p>
          <p>
          Kumana National Park, located on Sri Lanka's southeast coast, is a hidden gem renowned for its rich biodiversity and stunning landscapes. Spanning over 18,000 acres, the park features expansive wetlands, lagoons, and diverse ecosystems that attract a variety of wildlife, including elephants, leopards, and numerous bird species. Birdwatchers flock to Kumana during migration seasons to witness flocks of exotic birds. The park's tranquil setting makes it an ideal destination for nature enthusiasts seeking adventure and serenity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;