import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Mail, MapPin, Pencil, Phone, Trash2 } from "lucide-react";
import "./Girlprofile.css";
import Sidebar from "../components/Sidebar";

// Details for girl's profile. This is dummy data for showing the page design.
const girlProfile = {
  fullName: "Kaguya Shinomiya",
  role: "Beneficiary",
  studentContact: "1234567890",
  studentEmail: "shinomiyakaguya@gmail.com",
  location: "Sikkim",
  joinedDate: "22-07-2024",
};

const assignedMentors = [
  {
    id: 1,
    name: "Jordan Pierce",
    program: "Design Apprenticeship",
    status: "Active",
  },
  {
    id: 2,
    name: "Sam Whitfield",
    program: "Design Apprenticeship",
    status: "On Hold",
  },
];

function GirlProfile() {
    const navigate = useNavigate();
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        className="girl-profile-page"
        style={{ flex: 1, overflowY: "auto" }}
      >
        <header className="girl-profile-topbar">
          <button className="profile-admin-button" type="button">
            <span className="profile-admin-icon">A</span>
            <span>Admin</span>
          </button>
        </header>

        <section className="profile-card">
          <div className="profile-top-row">
            <div className="profile-basic-info">
              <div className="profile-avatar"></div>

              <div className="profile-name-block">
                <h1>{girlProfile.fullName}</h1>
                <span className="profile-role">{girlProfile.role}</span>
              </div>
            </div>

            <div className="profile-actions">
             <button
  className="profile-button edit-button"
  type="button"
  onClick={() => navigate("/dashboard")}
>
  <Pencil className="button-icon" />
  Edit
</button>

              <button className="profile-button delete-button" type="button">
                <Trash2 className="button-icon" />
                Delete
              </button>
            </div>
          </div>

          <div className="profile-info-grid">
            <div className="profile-info-item">
              <Mail className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">{girlProfile.studentEmail}</span>
              </div>
            </div>

            <div className="profile-info-item">
              <Phone className="info-icon" />
              <div>
                <span className="info-label">Phone</span>
                <span className="info-value">{girlProfile.studentContact}</span>
              </div>
            </div>

            <div className="profile-info-item">
              <MapPin className="info-icon" />
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">{girlProfile.location}</span>
              </div>
            </div>

            <div className="profile-info-item">
              <Calendar className="info-icon" />
              <div>
                <span className="info-label">Joined</span>
                <span className="info-value">{girlProfile.joinedDate}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="assigned-mentors-card">
          <h2>Assigned Mentors</h2>

          <div className="assigned-mentor-list">
            {assignedMentors.map((mentor) => (
              <div className="assigned-mentor-row" key={mentor.id}>
                <div className="assigned-mentor-info">
                  <div className="assigned-mentor-avatar"></div>

                  <div>
                    <h3>{mentor.name}</h3>
                    <p>{mentor.program}</p>
                  </div>
                </div>

                <span
                  className={
                    mentor.status === "Active"
                      ? "mentor-status active-mentor"
                      : "mentor-status hold-mentor"
                  }
                >
                  {mentor.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default GirlProfile;