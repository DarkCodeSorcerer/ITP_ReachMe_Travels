const mongoose = require('mongoose');

// Define the schema for the complaint
const complaintSchema = new mongoose.Schema({
    complaintId: { type: String, required: true, unique: true }, // Complaint ID will follow the format 'reachmeXXX'
    name: { type: String, required: true },
    mailId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'Open' },
    assignedStaff: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    fileUrl: { type: String },
    note: { type: String }
});

// Pre-save middleware to generate complaintId
complaintSchema.pre('save', async function (next) {
    const complaint = this;

    if (complaint.isNew) {
        // Fetch the last complaint from the database, sorted by complaintId
        const lastComplaint = await mongoose.model('Complaint').findOne().sort({ createdAt: -1 });

        // Generate the next complaint ID
        let nextId = 'reachme001'; // Start with reachme001
        if (lastComplaint && lastComplaint.complaintId) {
            const lastIdNumber = parseInt(lastComplaint.complaintId.replace('reachme', ''), 10);
            nextId = `reachme${String(lastIdNumber + 1).padStart(3, '0')}`; // Increment the ID
        }

        // Assign the generated complaintId to this complaint
        complaint.complaintId = nextId;
    }

    next(); // Continue saving the document
});

module.exports = mongoose.model('Complaint', complaintSchema);
