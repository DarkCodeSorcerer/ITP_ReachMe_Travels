const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback"); // Adjust the path as needed

// Handle POST request to submit feedback
router.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(200).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ message: "Error saving feedback. Please try again." });
  }
});

module.exports = router;
