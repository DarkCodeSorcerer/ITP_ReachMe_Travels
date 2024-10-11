import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddNewTrain() {
  const navigate = useNavigate();

  // State variables for form fields
  const [trainData, setTrainData] = useState({
    trainName: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    date: "",
    price: "",
    noOfSeats: "",
    description: "",
    maxBaggage: "",
    classType: "",
    cancelCharges: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setTrainData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle submission
  const sendData = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("/train/add", trainData)
          .then(() => {
            Swal.fire("Train has been successfully saved!", "", "success");
            navigate("/train");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Details are not saved", "", "error");
      }
    });
  };

  return (
    <div>
      <h1 className="uppercase text-center py-16 text-2xl md:text-3xl font-bold">
        Add New Train
      </h1>

      {/* Background color changed to #8E24AA*/}
      <div className="bg-[#E5D9E9]">
        <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">
          <form onSubmit={sendData}>
            {/* Train Name */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="trainName"
                placeholder="Train Name"
                value={trainData.trainName}
                onChange={handleChange}
                required
                maxLength={10}
              />
            </div>

            {/* From */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="from"
                placeholder="From"
                value={trainData.from}
                onChange={handleChange}
                required
                maxLength={10}
              />
            </div>

            {/* To */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="to"
                placeholder="To"
                value={trainData.to}
                onChange={handleChange}
                required
                maxLength={10}
              />
            </div>

            {/* Departure Time */}
            <div className="relative mb-3 mt-5">
              <input
                type="time"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="departureTime"
                value={trainData.departureTime}
                onChange={handleChange}
              />
            </div>

            {/* Arrival Time */}
            <div className="relative mb-3 mt-5">
              <input
                type="time"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="arrivalTime"
                value={trainData.arrivalTime}
                onChange={handleChange}
              />
            </div>

            {/* Date */}
            <div className="relative mb-3 mt-5">
              <input
                type="date"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="date"
                value={trainData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Price */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="price"
                placeholder="Price"
                value={trainData.price}
                onChange={handleChange}
              />
            </div>

            {/* Number of Seats */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="noOfSeats"
                placeholder="Number of Seats"
                value={trainData.noOfSeats}
                onChange={handleChange}
                onKeyPress={(e) => {
                  // Allow only numbers
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            {/* Description */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="description"
                placeholder="Description"
                value={trainData.description}
                onChange={handleChange}
              />
            </div>

            {/* Max Baggage */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="maxBaggage"
                placeholder="Max Baggage Weight"
                value={trainData.maxBaggage}
                onChange={handleChange}
              />
            </div>

            {/* Class Type */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="classType"
                placeholder="Class Type"
                value={trainData.classType}
                onChange={handleChange}
              />
            </div>

            {/* Cancel Charges */}
            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF]"
                id="cancelCharges"
                placeholder="Cancel Charges"
                value={trainData.cancelCharges}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button with Purple Color */}
            <button
              type="submit"
              className="mt-6 inline-block rounded bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-[0_8px_9px_-4px_rgba(96,100,214,0.3),0_4px_18px_0_rgba(96,100,214,0.2)] focus:bg-purple-700 focus:shadow-[0_8px_9px_-4px_rgba(96,100,214,0.3),0_4px_18px_0_rgba(96,100,214,0.2)] active:bg-purple-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
