
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import Sidebar from "../components/Sidebar";
import "./OurMentors.css";


// Dummy data for now. Later this can come from a database or backend API.
const mentorsData = [
    {
        id: 1,
        name: "Ms Anushka Bose",
        mobile: "7890654689",
        email: "anushka@example.com",
        beneficiaryCount: 7,
        status: "Active",
    },
    {
        id: 2,
        name: "Dr. Makise Kurisu",
        mobile: "7890654689",
        email: "kurisu@example.com",
        beneficiaryCount: 5,
        status: "Active",
    },
    {
        id: 3,
        name: "Lucy Heartfillia",
        mobile: "7890654689",
        email: "lucy@example.com",
        beneficiaryCount: 9,
        status: "Inactive",
    },
    {
        id: 4,
        name: "Penelope Eckhart",
        mobile: "7890654689",
        email: "penelope@example.com",
        beneficiaryCount: 6,
        status: "Inactive",
    },
    {
        id: 5,
        name: "Wu Zetian",
        mobile: "7890654689",
        email: "-",
        beneficiaryCount: 8,
        status: "Active",
    },
];

function MentorsTable() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    // Search logic: show only mentors whose name includes the typed text.
    const filteredMentors = mentorsData.filter((mentor) => {
        return mentor.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />

        <main
            className="mentor-dashboard"
            style={{
                flex: 1,
                overflowY: "auto",
                marginLeft: "75px",
            }}
        >
            <section className="dashboard-main">
                <header className="topbar">

                    <button className="admin-button" type="button">
                        <span className="admin-icon">A</span>
                        <span>Admin</span>
                    </button>
                </header>

                <section className="content-area">
                    <div className="page-header">
                        <h1>Our Mentors</h1>
                    </div>

                    <div className="toolbar">
                        <input
                            type="text"
                            placeholder="Search Mentors"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />

                        <div className="toolbar-actions">
                            <button className="filter-button" type="button" aria-label="Filter mentors">
                                <SlidersHorizontal className="filter-icon" />
                            </button>
                            <button
    className="add-button"
    type="button"
    onClick={() => navigate("/add-mentor")}
>
    + Add Mentor
</button>
                        </div>
                    </div>

                    <section className="table-card">
                        <div className="table-header table-row">
                            <span>Name</span>
                            <span>Mobile Number</span>
                            <span>E-mail</span>
                            <span>Beneficiary count</span>
                            <span>Status</span>
                        </div>

                        {filteredMentors.map((mentor) => (
                            <div className="table-row" key={mentor.id}>
                                <strong>{mentor.name}</strong>
                                <span>{mentor.mobile}</span>
                                <span>{mentor.email}</span>

                                <span>{mentor.beneficiaryCount}</span>

                                <span
                                    className={
                                        mentor.status === "Active"
                                            ? "status-badge active-status"
                                            : "status-badge inactive-status"
                                    }
                                >
                                    {mentor.status}
                                </span>
                            </div>
                        ))}

                        {filteredMentors.length === 0 && (
                            <div className="empty-message">No mentors found</div>
                        )}
                    </section>
                </section>
            </section>
               </main>
    </div>
    );
}

export default MentorsTable;
