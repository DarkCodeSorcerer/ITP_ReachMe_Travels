import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import Navbar from '../../components/navbar/Navbar'; // Adjust the path as necessary
import Footer from '../../components/footer/Footer'; // Import Footer component

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(''); // To handle submission errors

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/api/feedback', formData);
        if (response.status === 200) {
          setSubmitted(true); // Mark the form as successfully submitted
        }
      } catch (error) {
        console.error("Error submitting feedback:", error);
        setSubmitError('There was an issue submitting your feedback. Please try again.'); // Handle submission error
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-white"> {/* Include the Header component here */}
      <div className="flex-grow flex items-center justify-center pb-10"> {/* Added padding-bottom here */}
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#B399DD] mb-6 text-center">Customer Feedback</h2>

          {submitted ? (
            <div className="text-center text-green-600">
              Thank you for your feedback!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Display any submission error */}
              {submitError && <div className="text-red-500 text-sm mb-4">{submitError}</div>}

              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-lg"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-lg"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              {/* Feedback Message Input */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Feedback Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-lg"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#B399DD] text-white py-2 rounded-lg hover:bg-[#B399DD] transition-transform transform hover:scale-105"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
