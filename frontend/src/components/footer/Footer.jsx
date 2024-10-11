import React from "react";
import ComplaintForm from "../../pages/Complain/ComplaintForm"; // Go up one level, then into complaints
import ComplaintProcess from "../../pages/Complain/Process";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      <div className="">
        <h3 className="text-2xl font-bold text-[#B399DD]">ReachMe Travels</h3>
        <p className="py-4">
        ReachMe Travels, we are committed to delivering exceptional travel experiences with personalized service 
        and expert guidance. Let us help you explore the world with ease, comfort, and unforgettable memories. 
        Safe travels start here!
        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6">
          <FaWhatsappSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="flex md:justify-around justify-start mt-8">
        <div>
          <h6 className="font-bold text-[#B399DD]">Reservations</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Residence</li>
            <li className="py-2 text-sm">Tour Packages</li>
            <li className="py-2 text-sm">Vehicles</li>
            <li className="py-2 text-sm">Restaurants</li>
            <li className="py-2 text-sm">Events</li>
          </ul>
        </div>
        <div className="ml-[8rem]">
          <h6 className="font-bold text-[#B399DD]">Support</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Contact us</li>
            <li className="py-2 text-sm">About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
