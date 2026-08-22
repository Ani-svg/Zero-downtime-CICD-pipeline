import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Mail, MapPin, Pencil, Phone, Trash2 } from "lucide-react";
import "./MentorsProfile.css";
import Sidebar from "../components/Sidebar";

// Dummy data for mentor profile
const mentorProfile = {
    fullName: "Elena Zelavich",
    role: "Mentor",
    mentorContact: "1234567890",
    mentorEmail: "elena@gmail.com",
    location: "Sikkim",
    joinedDate: "22-07-2024",
};

// Dummy data for assigned beneficiaries
const assignedBeneficiaries = [
    {
        id: 1,
        name: "Sana Begum",
        program: "Higher Secondary Program",
        status: "Active",
    },
    {
        id: 2,
        name: "Alluka Zoldyck",
        program: "Diploma Program",
        status: "On Hold",
    },
];

function MentorProfile() {
    const navigate = useNavigate();
        return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />

        <main
            className="mentor-profile-page"
            style={{
                flex: 1,
                overflowY: "auto",
                marginLeft: "75px",
            }}
        >
            <header className="mentor-profile-topbar">
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
                            <h1>{mentorProfile.fullName}</h1>
                            <span className="profile-role">{mentorProfile.role}</span>
                        </div>
                    </div>

                    <div className="profile-actions">
                        <button className="profile-button edit-button" type="button">
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
                            <span className="info-value">{mentorProfile.mentorEmail}</span>
                        </div>
                    </div>

                    <div className="profile-info-item">
                        <Phone className="info-icon" />
                        <div>
                            <span className="info-label">Phone</span>
                            <span className="info-value">{mentorProfile.mentorContact}</span>
                        </div>
                    </div>

                    <div className="profile-info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <span className="info-label">Location</span>
                            <span className="info-value">{mentorProfile.location}</span>
                        </div>
                    </div>

                    <div className="profile-info-item">
                        <Calendar className="info-icon" />
                        <div>
                            <span className="info-label">Joined</span>
                            <span className="info-value">{mentorProfile.joinedDate}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="assigned-beneficiaries-card">
                <h2>Assigned Beneficiaries</h2>

                <div className="assigned-beneficiary-list">
                    {assignedBeneficiaries.map((beneficiary) => (
                        <div className="assigned-beneficiary-row" key={beneficiary.id}>
                            <div className="assigned-beneficiary-info">
                                <div className="assigned-beneficiary-avatar"></div>

                                <div>
                                    <h3>{beneficiary.name}</h3>
                                    <p>{beneficiary.program}</p>
                                </div>
                            </div>

                            <span
                                className={
                                    beneficiary.status === "Active"
                                        ? "beneficiary-status active-beneficiary"
                                        : "beneficiary-status hold-beneficiary"
                                }
                            >
                                {beneficiary.status}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
                </main>
    </div>
    );
}

export default MentorProfile;