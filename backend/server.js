const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");
const socket = require("socket.io");

// Database connection
const connectDB = require("./config/db");
connectDB();

// Middlewares
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/user", userRoutes);

// Complaint Routes
const complaintRoutes = require("./routes/ComplaintRoutes");
app.use("/api/complaints", complaintRoutes);

//feedback
const feedbackRoutes = require('./routes/FeedbackRoutes'); // Adjust the path as needed
app.use('/api', feedbackRoutes);

// Vithu
const tourRouter = require("./routes/tourRouter");
app.use("/api/tours", tourRouter);

// Dinesh
const vehicleRouter = require("./routes/vehicles");
const reservationRouter = require("./routes/vehicleReservations");
app.use("/api/vehicle", vehicleRouter);
app.use("/api/vehicle/images", express.static(path.join(__dirname, "images")));
app.use("/api/vehiclereservation", reservationRouter);

// Farsad
const hotels = require('./routes/hotels');
const rooms = require('./routes/rooms');
const hotelreservation = require('./routes/hotelReservationRoute');
app.use('/api/hotels', hotels);
app.use('/api/rooms', rooms);
app.use('/api/hotelreservation', hotelreservation);
app.use('/api/hotels/images', express.static(path.join(__dirname, 'images')));

// Nithu
const trainRouter = require("./routes/train");
app.use("/api/train", trainRouter);

const seatBookingRouter = require("./routes/SeatBookings");
app.use("/api/seatBookings", seatBookingRouter);

// Port and server setup
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server running on port ${port} 🔥`)
);

// Socket.io setup
const io = socket(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
});
