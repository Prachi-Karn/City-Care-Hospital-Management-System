import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
const [age, setAge] = useState("");
const [mobile, setMobile] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🏥 Hospital Management System</h1>

      <button onClick={() => setMessage("Patient Registration Page")}>
        Patient Registration
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setMessage("Doctor List Page")}
      >
        Doctor List
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setMessage("Appointments Page")}
      >
        Appointments
      </button>

      <h2 style={{ marginTop: "30px" }}>{message}</h2>

      {message === "Patient Registration Page" && (
        <div style={{ marginTop: "20px" }}>
         <input
  type="text"
  placeholder="Enter Patient Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{ padding: "8px", margin: "5px" }}
/>

        <input
  type="number"
  placeholder="Enter Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  style={{ padding: "8px", margin: "5px" }}
/>
          <input
  type="text"
  placeholder="Enter Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  style={{ padding: "8px", margin: "5px" }}
/>

          <br />
          <br />

         <button
  onClick={() => alert("Form Submitted")}
>
  Submit
 </button>
  
        </div>
      )}
    </div>
  );
}

export default App;