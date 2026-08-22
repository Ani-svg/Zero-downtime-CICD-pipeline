import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MentorDetails from "../components/MentorDetails";

import "../components/AddMentor.css";

function AddMentor() {
  const [mentor, setMentor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    qualification: "",
    occupation: "",
    experience: "",
    specialization: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    profilePicture: null,
  });

  const handleSave = () => {
    // TODO: Save mentor to backend/database
    alert("Mentor added successfully!");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="add-mentor-page">
          <h1>Add Mentor</h1>

          <div className="mentor-container">
            <MentorDetails
              mentor={mentor}
              setMentor={setMentor}
              handleSave={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMentor;