import { useState } from "react";

function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Patient states
  const [patientNameInput, setPatientNameInput] = useState("");
  const [patientAgeInput, setPatientAgeInput] = useState("");
  const [patientMobileInput, setPatientMobileInput] = useState("");
  const [registeredPatientsList, setRegisteredPatientsList] = useState([]);

  // Doctor data
  const hospitalDoctors = [
    { id: 1, fullName: "Dr. Anjali Singh", department: "Gynecology", experience: "8 years" },
    { id: 2, fullName: "Dr. Payal Sharma", department: "Orthopedics", experience: "10 years" },
    { id: 3, fullName: "Dr. Ravi Patel", department: "Dermatology", experience: "6 years" },
    { id: 4, fullName: "Dr. Suresh Kumar", department: "Cardiology", experience: "12 years" },
    { id: 5, fullName: "Dr. Neha Verma", department: "Pediatrics", experience: "7 years" },
  ];

  // Appointment states
  const [appointmentPatientName, setAppointmentPatientName] = useState("");
  const [appointmentSelectedDoctor, setAppointmentSelectedDoctor] = useState("");
  const [appointmentDateInput, setAppointmentDateInput] = useState("");
  const [appointmentTimeInput, setAppointmentTimeInput] = useState("");
  const [allAppointmentsList, setAllAppointmentsList] = useState([]);
  const [doctorSearchTerm, setDoctorSearchTerm] = useState("");

  // Helper: Get matching doctors
  const searchedDoctors = hospitalDoctors.filter(
    (doc) =>
      doc.fullName.toLowerCase().includes(doctorSearchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(doctorSearchTerm.toLowerCase())
  );

  // Add new patient
  const addNewPatient = () => {
    if (!patientNameInput.trim() || !patientAgeInput || !patientMobileInput.trim()) {
      alert("⚠️ Please fill in all  details");
      return;
    }

    const patientObj = {
      patientId: Date.now(),
      patientFullName: patientNameInput,
      patientAge: patientAgeInput,
      patientPhone: patientMobileInput,
      registrationTime: new Date().toLocaleDateString("hi-IN"),
    };

    setRegisteredPatientsList([...registeredPatientsList, patientObj]);
    alert("✅ Patient Registered successfully");
    
    // Clear inputs
    setPatientNameInput("");
    setPatientAgeInput("");
    setPatientMobileInput("");
  };

  // Remove patient
  const removePatient = (id) => {
    setRegisteredPatientsList(registeredPatientsList.filter((p) => p.patientId !== id));
    alert("🗑️ Patient Deleted successfully");
  };

  // Add appointment
  const addAppointment = () => {
    if (
      !appointmentPatientName.trim() ||
      !appointmentSelectedDoctor ||
      !appointmentDateInput ||
      !appointmentTimeInput
    ) {
      alert("⚠️ Please fill  all appointment details");
      return;
    }

    const appointmentObj = {
      appointmentId: Date.now(),
      patName: appointmentPatientName,
      docName: appointmentSelectedDoctor,
      appointDate: appointmentDateInput,
      appointTime: appointmentTimeInput,
      appointmentStatus: "Pending",
    };

    setAllAppointmentsList([...allAppointmentsList, appointmentObj]);
    alert("✅ Appointment booked successfully");

    setAppointmentPatientName("");
    setAppointmentSelectedDoctor("");
    setAppointmentDateInput("");
    setAppointmentTimeInput("");
  };

  // Delete appointment
  const deleteAppointment = (id) => {
    setAllAppointmentsList(allAppointmentsList.filter((apt) => apt.appointmentId !== id));
  };

  // Update appointment status
  const updateAppointmentStatus = (id, newStatus) => {
    const updated = allAppointmentsList.map((apt) =>
      apt.appointmentId === id ? { ...apt, appointmentStatus: newStatus } : apt
    );
    setAllAppointmentsList(updated);
  };

  // Styles
  const headerStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "25px",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "25px",
    boxShadow: "0 8px 16px rgba(102, 126, 234, 0.4)",
  };

  const navButtonStyle = (isActive) => ({
    padding: "11px 18px",
    margin: "8px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
    backgroundColor: isActive ? "#667eea" : "#f0f0f0",
    color: isActive ? "white" : "#333",
    boxShadow: isActive ? "0 4px 12px rgba(102, 126, 234, 0.4)" : "none",
  });

  const cardStyle = {
    background: "white",
    padding: "25px",
    margin: "15px auto",
    borderRadius: "10px",
    maxWidth: "800px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    border: "1px solid #f0f0f0",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "10px 0",
    border: "2px solid #e8e8e8",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  const submitButtonStyle = {
    padding: "12px 30px",
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "15px",
    transition: "all 0.3s",
  };

  const statCardStyle = (bgColor) => ({
    background: bgColor,
    color: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    minWidth: "200px",
  });

  // Status color mapping
  const getStatusColor = (status) => {
    const colors = {
      Pending: "#f39c12",
      Completed: "#27ae60",
      Cancelled: "#e74c3c",
    };
    return colors[status] || "#95a5a6";
  };

  const statusButtonStyle = (isActive, bgColor) => ({
    padding: "8px 14px",
    margin: "5px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    backgroundColor: isActive ? bgColor : "#ecf0f1",
    color: isActive ? "white" : "#2c3e50",
    transition: "all 0.3s",
  });

  const deleteButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    marginLeft: "auto",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={{ margin: "0", fontSize: "32px" }}>🏥 City Care Hospital</h1>
          <p style={{ margin: "8px 0 0 0", opacity: "0.9" }}>Patient & Appointment Management</p>
        </div>

        {/* Navigation */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <button
            style={navButtonStyle(currentPage === "dashboard")}
            onClick={() => setCurrentPage("dashboard")}
          >
            📊 Dashboard
          </button>
          <button
            style={navButtonStyle(currentPage === "register")}
            onClick={() => setCurrentPage("register")}
          >
            ➕ Register Patient
          </button>
          <button
            style={navButtonStyle(currentPage === "patients")}
            onClick={() => setCurrentPage("patients")}
          >
            👥 Patient List
          </button>
          <button
            style={navButtonStyle(currentPage === "doctors")}
            onClick={() => setCurrentPage("doctors")}
          >
            👨‍⚕️ Doctors
          </button>
          <button
            style={navButtonStyle(currentPage === "appointments")}
            onClick={() => setCurrentPage("appointments")}
          >
            📅 Appointments
          </button>
        </div>

        {/* DASHBOARD PAGE */}
        {currentPage === "dashboard" && (
          <div>
            <h2 style={{ color: "#2c3e50", marginBottom: "25px" }}>📊 Quick Statistics</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              <div style={statCardStyle("linear-gradient(135deg, #667eea 0%, #764ba2 100%)")}>
                <h3 style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>Total Patients</h3>
                <p style={{ margin: "10px 0 0 0", fontSize: "42px", fontWeight: "bold" }}>
                  {registeredPatientsList.length}
                </p>
              </div>

              <div style={statCardStyle("linear-gradient(135deg, #f093fb 0%, #f5576c 100%)")}>
                <h3 style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>Total Doctors</h3>
                <p style={{ margin: "10px 0 0 0", fontSize: "42px", fontWeight: "bold" }}>
                  {hospitalDoctors.length}
                </p>
              </div>

              <div style={statCardStyle("linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)")}>
                <h3 style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>Total Appointments</h3>
                <p style={{ margin: "10px 0 0 0", fontSize: "42px", fontWeight: "bold" }}>
                  {allAppointmentsList.length}
                </p>
              </div>

              <div style={statCardStyle("linear-gradient(135deg, #fa709a 0%, #fee140 100%)")}>
                <h3 style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>Pending</h3>
                <p style={{ margin: "10px 0 0 0", fontSize: "42px", fontWeight: "bold" }}>
                  {allAppointmentsList.filter((a) => a.appointmentStatus === "Pending").length}
                </p>
              </div>

              <div style={statCardStyle("linear-gradient(135deg, #30cfd0 0%, #330867 100%)")}>
                <h3 style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>Completed</h3>
                <p style={{ margin: "10px 0 0 0", fontSize: "42px", fontWeight: "bold" }}>
                  {allAppointmentsList.filter((a) => a.appointmentStatus === "Completed").length}
                </p>
              </div>

              <div style={statCardStyle("linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)")}>
                <h3 style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>Cancelled</h3>
                <p style={{ margin: "10px 0 0 0", fontSize: "42px", fontWeight: "bold" }}>
                  {allAppointmentsList.filter((a) => a.appointmentStatus === "Cancelled").length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PATIENT REGISTRATION PAGE */}
        {currentPage === "register" && (
          <div style={cardStyle}>
            <h2 style={{ color: "#2c3e50", marginTop: "0" }}>➕ Register New Patient</h2>
            
            <input
              type="text"
              placeholder="Patient Full Name"
              value={patientNameInput}
              onChange={(e) => setPatientNameInput(e.target.value)}
              style={inputStyle}
            />
            
            <input
              type="number"
              placeholder="Age"
              value={patientAgeInput}
              onChange={(e) => setPatientAgeInput(e.target.value)}
              style={inputStyle}
            />
            
            <input
              type="tel"
              placeholder="Mobile Number"
              value={patientMobileInput}
              onChange={(e) => setPatientMobileInput(e.target.value)}
              style={inputStyle}
            />

            <button style={submitButtonStyle} onClick={addNewPatient}>
              ✓ Register Patient
            </button>
          </div>
        )}

        {/* PATIENT LIST PAGE */}
        {currentPage === "patients" && (
          <div>
            <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>👥 Registered Patients</h2>
            
            {registeredPatientsList.length === 0 ? (
              <div style={cardStyle}>
                <p style={{ color: "#7f8c8d", textAlign: "center" }}>No patients registered yet</p>
              </div>
            ) : (
              registeredPatientsList.map((patient) => (
                <div key={patient.patientId} style={cardStyle}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: "1" }}>
                      <h3 style={{ color: "#667eea", margin: "0 0 12px 0" }}>{patient.patientFullName}</h3>
                      <p style={{ margin: "6px 0", color: "#555" }}>📌 Age: {patient.patientAge}</p>
                      <p style={{ margin: "6px 0", color: "#555" }}>📞 Mobile: {patient.patientPhone}</p>
                      <p style={{ margin: "6px 0", color: "#999", fontSize: "13px" }}>
                        📅 Registered: {patient.registrationTime}
                      </p>
                    </div>
                    <button
                      style={{ ...deleteButtonStyle, marginLeft: "15px" }}
                      onClick={() => removePatient(patient.patientId)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* DOCTOR DIRECTORY PAGE */}
        {currentPage === "doctors" && (
          <div>
            <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>👨‍⚕️ Doctor Directory</h2>
            
            <div style={{ ...cardStyle, marginBottom: "25px" }}>
              <input
                type="text"
                placeholder="🔍 Search by name or department..."
                value={doctorSearchTerm}
                onChange={(e) => setDoctorSearchTerm(e.target.value)}
                style={{ ...inputStyle, margin: "0" }}
              />
            </div>

            {searchedDoctors.length === 0 ? (
              <div style={cardStyle}>
                <p style={{ color: "#7f8c8d", textAlign: "center" }}>No doctors found</p>
              </div>
            ) : (
              searchedDoctors.map((doctor) => (
                <div key={doctor.id} style={cardStyle}>
                  <div style={{ borderLeft: "5px solid #667eea", paddingLeft: "15px" }}>
                    <h3 style={{ color: "#667eea", margin: "0 0 10px 0" }}>{doctor.fullName}</h3>
                    <p style={{ margin: "5px 0", color: "#555" }}>
                      🏥 <strong>Department:</strong> {doctor.department}
                    </p>
                    <p style={{ margin: "5px 0", color: "#555" }}>
                      ⭐ <strong>Experience:</strong> {doctor.experience}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* APPOINTMENTS PAGE */}
        {currentPage === "appointments" && (
          <div>
            <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>📅 Manage Appointments</h2>

            {/* Booking Form */}
            <div style={cardStyle}>
              <h3 style={{ color: "#667eea", marginTop: "0" }}>Book New Appointment</h3>
              
              <input
                type="text"
                placeholder="Patient Name"
                value={appointmentPatientName}
                onChange={(e) => setAppointmentPatientName(e.target.value)}
                style={inputStyle}
              />
              
              <input
                type="date"
                value={appointmentDateInput}
                onChange={(e) => setAppointmentDateInput(e.target.value)}
                style={inputStyle}
              />
              
              <input
                type="time"
                value={appointmentTimeInput}
                onChange={(e) => setAppointmentTimeInput(e.target.value)}
                style={inputStyle}
              />
              
              <select
                value={appointmentSelectedDoctor}
                onChange={(e) => setAppointmentSelectedDoctor(e.target.value)}
                style={inputStyle}
              >
                <option value="">Select Doctor</option>
                {hospitalDoctors.map((doc) => (
                  <option key={doc.id} value={doc.fullName}>
                    {doc.fullName} - {doc.department}
                  </option>
                ))}
              </select>

              <button style={submitButtonStyle} onClick={addAppointment}>
                ✓ Book Appointment
              </button>
            </div>

            {/* Appointments List */}
            <h3 style={{ color: "#2c3e50", marginTop: "30px" }}>Booked Appointments</h3>
            
            {allAppointmentsList.length === 0 ? (
              <div style={cardStyle}>
                <p style={{ color: "#7f8c8d", textAlign: "center" }}>No appointments booked</p>
              </div>
            ) : (
              allAppointmentsList.map((apt) => (
                <div key={apt.appointmentId} style={cardStyle}>
                  <div>
                    <h4 style={{ color: "#667eea", margin: "0 0 12px 0" }}>👤 {apt.patName}</h4>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                      <div>
                        <p style={{ margin: "5px 0", color: "#555" }}>
                          <strong>👨‍⚕️ Doctor:</strong> {apt.docName}
                        </p>
                        <p style={{ margin: "5px 0", color: "#555" }}>
                          <strong>📅 Date:</strong> {apt.appointDate}
                        </p>
                      </div>
                      <div>
                        <p style={{ margin: "5px 0", color: "#555" }}>
                          <strong>⏰ Time:</strong>{" "}
                          {apt.appointTime
                            ? new Date(`2000-01-01T${apt.appointTime}`).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              })
                            : "N/A"}
                        </p>
                        <p style={{ margin: "5px 0" }}>
                          <strong>Status:</strong>{" "}
                          <span
                            style={{
                              display: "inline-block",
                              padding: "4px 10px",
                              borderRadius: "5px",
                              backgroundColor: getStatusColor(apt.appointmentStatus),
                              color: "white",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {apt.appointmentStatus}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Status Buttons */}
                    <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <button
                        style={statusButtonStyle(
                          apt.appointmentStatus === "Pending",
                          "#f39c12"
                        )}
                        onClick={() => updateAppointmentStatus(apt.appointmentId, "Pending")}
                      >
                        Pending
                      </button>
                      <button
                        style={statusButtonStyle(
                          apt.appointmentStatus === "Completed",
                          "#27ae60"
                        )}
                        onClick={() => updateAppointmentStatus(apt.appointmentId, "Completed")}
                      >
                        Completed
                      </button>
                      <button
                        style={statusButtonStyle(
                          apt.appointmentStatus === "Cancelled",
                          "#e74c3c"
                        )}
                        onClick={() => updateAppointmentStatus(apt.appointmentId, "Cancelled")}
                      >
                        Cancelled
                      </button>
                      <button
                        style={deleteButtonStyle}
                        onClick={() => deleteAppointment(apt.appointmentId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
