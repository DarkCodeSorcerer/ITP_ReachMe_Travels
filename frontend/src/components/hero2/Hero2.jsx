import React from "react";

const Hero2 = () => {
  return (
    <>
      <div class="md:px-36 px-8 md:py-28 py-5">
        <div class="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div class="flex flex-col gap-5 justify-center p-5">
            <h1 class="text-4xl md:text-5xl font-bold">Journey Through</h1>
            <h1 class="text-4xl md:text-6xl font-bold text-[#B399DD]">
            Sri Lanka's
            </h1>
            <h1 class="text-4xl md:text-5xl font-bold">Wonders!</h1>

            <p class="mt-4">
            Start your journey with ReachMe Travels today! Explore incredible destinations, enjoy personalized itineraries, and make unforgettable memories with ease. Your adventure begins here—let's get started!
            </p>
            <button className="bg-black text-white px-2 py-3 rounded-lg hover:bg-[#B399DD] hover:border hover:text-black hover:font-bold mt-4">
              
              Get started
            </button>
          </div>
          <div class="">
            <img
              src="https://elements-resized.envatousercontent.com/envato-shoebox/5ebe/d6a0-ce45-447e-9c38-0406a87576c4/DR_101008_4348.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=9df0116e0df9573c9d815b6108e67b891e12c38516dc3e27f942d1d01e705917"
              alt="heroimg"
              class="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
