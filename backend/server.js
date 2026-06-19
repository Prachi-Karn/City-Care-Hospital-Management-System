require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);
// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hospital Backend Running");
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

console.log("🔄 Connecting to MongoDB...");
console.log("MONGO_URI:", MONGO_URI);

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected Successfully!");
  
  // Start Server
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.log("❌ MongoDB Connection Error:", err.message);
  process.exit(1);
});

// Patients Array (for now)
let patients = [];

// GET all patients
app.get("/patients", (req, res) => {
  res.json(patients);
});

// POST add patient
app.post("/patients", (req, res) => {
  patients.push(req.body);
  res.json({ message: "Patient Added" });
});

// DELETE patient
app.delete("/patients/:id", (req, res) => {
  const patientId = Number(req.params.id);
  patients = patients.filter(
    (patient) => patient.patientId !== patientId
  );
  res.json({ message: "Patient Deleted" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});