import { useState } from "react";

function App() {
  const [page, setpage] = useState("");
  const [patientName, setpatientName] = useState("");
const [age, setAge] = useState("");
const [mobile, setMobile] = useState("");

  return (
    <div style={{
      width: "100%",
      maxWidth: "1000px",
      textAlign: "center",
      whiteSpace: "nowrap",
      margin: "30px auto",
      padding: "30px",
      border: "2px solid #ccc",
      borderRadius: "5px",
    }}
    >
      <h1> City Care Hospital Management System</h1>

      <button
      style={{ marginTop: "20px",
               marginBottom: "10px",
                 color: "white",
                 border: "none",
                 padding: "9px 10px",
                 borderRadius: "6px",
                 cursor: "pointer",
                  backgroundColor: "black",
      }}
      onClick={() => setpage("Patient Registration Page")}
      >
        Patient Registration
      </button>

      <button
        style={{ marginLeft: "10px",
                 color: "white",
                 border: "none",
                 padding: "9px 10px",
                 borderRadius: "6px",
                 cursor: "pointer",
                  backgroundColor: "black",
        }}
        onClick={() => setpage("Doctor Directory Page")}
      >
        Doctor Directory
      </button>

      <button
        style={{ marginLeft: "10px",
                 color: "white",
                 border: "none",
                 padding: "9px 10px",
                 borderRadius: "6px",
                 cursor: "pointer",
                  backgroundColor: "black",
         }}
        onClick={() => setpage("Appointments Page")}
      >
        Appointments
      </button>

      <h2 style={{ marginTop: "30px" }}>{page}</h2>

      {page === "Patient Registration Page" && (
        <div style={{ marginTop: "20px" }}>
         <input
  type="text"
  placeholder="Enter Patient Name"
  value={patientName}
  onChange={(e) => setpatientName(e.target.value)}
  style={{ padding: "10px 10px", 
   margin: "7px" }}
/>

        <input
  type="number"
  placeholder="Enter Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  style={{ padding: "10px 3px", 
  margin: "5px" }}
/>
          <input
  type="text"
  placeholder="Enter Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  style={{ padding: "10px 10px", 
           margin: "5px" }}
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