import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar'; // Import Header
import ComplainNav from './ComplainNav'; // Import ComplainNav
import Footer from '../../components/footer/Footer'; // Import Footer

const ComplaintProcess = () => {
  const [searchId, setSearchId] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/complaints');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleSearch = () => {
    const trimmedSearchId = searchId.trim().toLowerCase();
    if (trimmedSearchId === '') {
      setFilteredComplaints([]);
      return;
    }

    const result = complaints.filter(
      (complaint) => complaint.complaintId.toLowerCase() === trimmedSearchId
    );

    setFilteredComplaints(result.length ? result : []);
  };

  const viewDetails = (complaint) => {
    setSelectedComplaint(complaint);
  };

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-screen bg-white">
        {/* Header */}
      

        {/* Complaint Management Navbar */}
        <ComplainNav />

        {/* Complaint Process Section */}
        <div className="p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#B399DD' }}>

            Complaint Tracking
          </h1>

          {/* Search Field */}
          <div className="mb-8 w-full max-w-2xl flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Complaint ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B399DD]"
            />
            <button
              onClick={handleSearch}
              className="text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
style={{ backgroundColor: '#B399DD', hover: { backgroundColor: '#A57FBC' } }}
            >
              Search
            </button>
          </div>
          {/* Display Filtered Complaints */}
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComplaints.length ? (
              filteredComplaints.map((complaint) => (
                <div
                  key={complaint.complaintId}
                  className="bg-white shadow-lg rounded-lg p-6"
                >
                  <p className="font-semibold">
                    <strong>Complaint ID:</strong> {complaint.complaintId}
                  </p>
                  <p>
                    <strong>Name:</strong> {complaint.name}
                  </p>
                  <p>
                    <strong>Description:</strong> {complaint.description}
                  </p>
                  <p>
                    <strong>Status:</strong>{' '}
                    <span
                      className={`font-semibold ${
                        complaint.status === 'Resolved'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </p>
                  <button
                    onClick={() => viewDetails(complaint)}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No complaints found</p>
            )}
          </div>

          {/* Display Complaint Details Modal */}
          {selectedComplaint && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Complaint Details</h2>
                <p>
                  <strong>Complaint ID:</strong>{' '}
                  {selectedComplaint.complaintId}
                </p>
                <p>
                  <strong>Date and Time of Complaint:</strong>{' '}
                  {new Date(selectedComplaint.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Name of Complainant:</strong>{' '}
                  {selectedComplaint.name}
                </p>
                <p>
                  <strong>Description:</strong>{' '}
                  {selectedComplaint.description}
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span
                    className={`font-semibold ${
                      selectedComplaint.status === 'Resolved'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {selectedComplaint.status}
                  </span>
                </p>
                <button
                  onClick={() => setSelectedComplaint(null)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintProcess;
