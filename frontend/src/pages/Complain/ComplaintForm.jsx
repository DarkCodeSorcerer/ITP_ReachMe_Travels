import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';  // Assuming Header component is available
import ComplainNav from './ComplainNav';  // Importing ComplainNav component
import Footer from '../../components/footer/Footer';  // Assuming Footer component is available

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mailId: '',
    phoneNumber: '',
    complaintType: '',
    complaintDescription: '',
    file: null,
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      formErrors.name = 'Name should contain only letters';
    }
    if (!formData.mailId) {
      formErrors.mailId = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mailId)) {
      formErrors.mailId = 'Invalid email format';
    }
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }
    if (!formData.complaintType) {
      formErrors.complaintType = 'Complaint type is required';
    }
    if (!formData.complaintDescription.trim()) {
      formErrors.complaintDescription = 'Complaint description is required';
    } else if (formData.complaintDescription.trim().length < 20) {
      formErrors.complaintDescription = 'Description should be at least 20 characters long';
    }
    if (formData.file) {
      const fileSizeLimit = 2 * 1024 * 1024; // 2MB
      if (formData.file.size > fileSizeLimit) {
        formErrors.file = 'File size should not exceed 2MB';
      }
      const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowedFileTypes.includes(formData.file.type)) {
        formErrors.file = 'Only JPG, PNG, or PDF files are allowed';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('Please fix the validation errors.');
      return;
    }
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('mailId', formData.mailId);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('complaintType', formData.complaintType);
    formDataToSend.append('complaintDescription', formData.complaintDescription);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/complaints', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Optionally log the response or use some data from it
      console.log('Response data:', response.data);
      
      // You can customize the success message based on the response
      setStatus(response.data.message || 'Complaint submitted successfully!');
      
      // Reset the form fields
      setFormData({
        name: '',
        mailId: '',
        phoneNumber: '',
        complaintType: '',
        complaintDescription: '',
        file: null,
      });
      setErrors({});
    } catch (error) {
      setStatus('Error submitting complaint. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      

      {/* Complain Management Navbar */}
     

      {/* Complaint Form Section */}
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#B399DD' }}>
          Submit Your Complaint
        </h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl space-y-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="mailId"
              value={formData.mailId}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            />
            {errors.mailId && <span className="text-red-500 text-sm">{errors.mailId}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            />
            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">Complaint Type</label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            >
              <option value="">Select complaint type</option>
              <option value="Hotel Reservation">Hotel Reservation</option>
              <option value="Vehicle Reservation">Vehicle Reservation</option>
              <option value="Train Booking">Train Booking</option>
              <option value="Searching for Restaurants">Searching for Restaurants</option>
              <option value="Others">Others</option>
            </select>
            {errors.complaintType && <span className="text-red-500 text-sm">{errors.complaintType}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">Complaint Description</label>
            <textarea
              name="complaintDescription"
              value={formData.complaintDescription}
              onChange={handleChange}
              placeholder="Enter a detailed description of your complaint"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            />
            {errors.complaintDescription && <span className="text-red-500 text-sm">{errors.complaintDescription}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">Attach a File (optional)</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*,application/pdf"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            />
            {errors.file && <span className="text-red-500 text-sm">{errors.file}</span>}
          </div>

          <div className="form-actions flex justify-between items-center">
            <button
              type="submit"
              className="text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
              style={{ backgroundColor: '#B399DD' }}
            >
              Submit
            </button>
            {status && <p className="text-green-500 text-sm">{status}</p>}
          </div>
        </form>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default ComplaintForm;
