import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // Import jsPDF
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../../components/navbar/Navbar';
import ComplainNav from './ComplainNav';  
import Footer from '../../components/footer/Footer'; 

Chart.register(ArcElement, Tooltip, Legend);

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [note, setNote] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetchComplaints();
    }, []);

    useEffect(() => {
        filterComplaintsByStatus();
    }, [statusFilter, complaints]);

    const fetchComplaints = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/api/complaints');
            setComplaints(res.data || []);
        } catch (err) {
            setError('Failed to fetch complaints');
        } finally {
            setLoading(false);
        }
    };

    const filterComplaintsByStatus = () => {
        setFilteredComplaints(
            statusFilter === 'All'
                ? complaints
                : complaints.filter(complaint => complaint.status === statusFilter)
        );
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Complaints Report', 20, 20);
        doc.setFontSize(12);

        let y = 30;
        filteredComplaints.forEach((complaint) => {
            doc.text(`Complaint ID: ${complaint.complaintId}`, 20, y);
            doc.text(`Email: ${complaint.mailId}`, 20, y + 5);
            doc.text(`Type: ${complaint.category}`, 20, y + 10);
            doc.text(`Description: ${complaint.description}`, 20, y + 15);
            doc.text(`Assigned Staff: ${complaint.assignedStaff}`, 20, y + 20);
            doc.text(`Status: ${complaint.status}`, 20, y + 25);
            y += 35; // Move to the next section
        });

        doc.save('complaints_report.pdf');
    };

    const handleChange = async (id, updates) => {
        try {
            await axios.put(`http://localhost:5000/api/complaints/${id}`, updates);
            fetchComplaints();
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/complaints/${id}`);
            fetchComplaints();
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const handleEdit = (complaint) => {
        setSelectedComplaint(complaint);
        setNote(complaint.note || '');
    };

    const handleUpdate = async () => {
        if (!selectedComplaint) return;
        await handleChange(selectedComplaint._id, { note, ...selectedComplaint });
        setSelectedComplaint(null);
    };

    const calculateCategoryDistribution = () => {
        const categoryCounts = complaints.reduce((acc, { category }) => {
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});

        const labels = ['Finance', 'Sales', 'BoatTrip', 'Employees', 'Event', 'Others'];
        return {
            labels,
            data: labels.map(label => categoryCounts[label] || 0),
        };
    };

    const { labels, data } = calculateCategoryDistribution();
    const pieData = {
        labels,
        datasets: [{ data, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'] }],
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ComplainNav />
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-6" style={{ color: '#B399DD' }}>
                    Received Complaints
                </h1>
                {loading && <p>Loading complaints...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <div className="tabs space-x-4">
                                {['All', 'Pending', 'In Progress', 'Resolved'].map(status => (
                                    <button
                                        key={status}
                                        className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 
                                        ${statusFilter === status ? 'bg-[#B399DD] text-white' : 'text-gray-700 hover:bg-purple-200'}`}
                                        onClick={() => setStatusFilter(status)}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                            <button 
                                onClick={generatePDF} 
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 shadow-md"
                            >
                                Generate Report
                            </button>
                        </div>
                        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 text-gray-600">
                                <tr>
                                    <th className="p-4 text-left">Complaint ID</th>
                                    <th className="p-4 text-left">Email</th>
                                    <th className="p-4 text-left">Type</th>
                                    <th className="p-4 text-left">Description</th>
                                    <th className="p-4 text-left">Assigned Staff</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredComplaints.length > 0 ? (
                                    filteredComplaints.map((complaint) => (
                                        <tr key={complaint._id} className="border-b hover:bg-gray-50">
                                            <td className="p-4">{complaint.complaintId}</td>
                                            <td className="p-4">{complaint.mailId}</td>
                                            <td className="p-4">{complaint.category}</td>
                                            <td className="p-4">{complaint.description}</td>
                                            <td className="p-4">
                                                <select
                                                    className="rounded-lg p-2 border border-gray-300 focus:ring focus:ring-purple-300"
                                                    value={complaint.assignedStaff || ''}
                                                    onChange={(e) => handleChange(complaint._id, { assignedStaff: e.target.value })}
                                                >
                                                    <option value="">Choose...</option>
                                                    <option value="Hotel Owner">Hotel Owner</option>
                                                    <option value="Vehicle Owner">Vehicle Owner</option>
                                                    <option value="Railway Departments">Railway Departments</option>
                                                    <option value="Staffs">Staffs</option>
                                                </select>
                                            </td>
                                            <td className="p-4">
                                                <select
                                                    className="rounded-lg p-2 border border-gray-300 focus:ring focus:ring-purple-300"
                                                    value={complaint.status}
                                                    onChange={(e) => handleChange(complaint._id, { status: e.target.value })}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Resolved">Resolved</option>
                                                </select>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className="flex justify-center space-x-4">
                                                    <button
                                                        onClick={() => handleEdit(complaint)}
                                                        className="text-purple-500 hover:text-purple-700 transform transition-transform hover:scale-110"
                                                    >
                                                        <i className="fas fa-pencil-alt text-xl"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(complaint._id)}
                                                        className="text-red-500 hover:text-red-700 transform transition-transform hover:scale-110"
                                                    >
                                                        <i className="fas fa-trash-alt text-xl"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="p-4 text-center text-gray-500">No complaints available.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default Complaints;
