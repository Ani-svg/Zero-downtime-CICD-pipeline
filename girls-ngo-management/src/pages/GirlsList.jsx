import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Filter, Plus } from "lucide-react";
import "./GirlsList.css";
import Sidebar from "../components/Sidebar";

// Dummy data for now. Later, this can come from a database or API.
const girlsData = [
    {
        id: 1,
        fullName: "Parnavi Sharma",
        state: "Rajasthan",
        country: "India",
    },
    {
        id: 2,
        fullName: "Amber Glen",
        state: "Texas",
        country: "United States",
    },
    {
        id: 3,
        fullName: "Nobara Kugisaki",
        state: "Osaka",
        country: "Japan",
    },
    {
        id: 4,
        fullName: "Mikasa Yeager",
        state: "Shiganshina",
        country: "Germany",
    },
    {
        id: 5,
        fullName: "Mei ling",
        state: "Kedah",
        country: "Malaysia",
    },
    {
        id: 6,
        fullName: "Tsheten Ongmu Bhutia",
        state: "Sikkim",
        country: "India",
    },
];

function GirlsList() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    //Searching for Girls in the list by name
    const filteredGirls = girlsData.filter((girl) => {
        return girl.fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />

        <main
            className="girls-list-page"
            style={{ flex: 1, overflowY: "auto" }}
        >
            <header className="girls-topbar">
                <button className="girls-admin-button" type="button">
                    <span className="girls-admin-icon">A</span>
                    <span>Admin</span>
                </button>
            </header>

            <section className="girls-list-container">
                <section className="girls-stats">
                    <div className="girls-stat-item">
                        <strong>250</strong>
                        <span>Number of Beneficiaries</span>
                    </div>

                    <div className="girls-stat-item">
                        <strong>50</strong>
                        <span>Mentors</span>
                    </div>
                </section>

                <header className="girls-list-header">
                    <div>
                        <h1>Our Beneficiaries</h1>
                    </div>
                </header>

                <section className="girls-toolbar">
                    <div className="search-field">
                        <Search className="search-icon" />
                        <input
                            id="girl-search"
                            type="text"
                            placeholder="Search Student"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                    </div>

                    <div className="girls-toolbar-actions">
                        <button className="girls-filter-button" type="button">
                            <Filter className="filter-icon" />

                        </button>
                        <button
    className="add-girl-button"
    type="button"
    onClick={() => navigate("/add-beneficiary")}
>
    <Plus className="add-icon" />
    Add Beneficiary
</button>
                    </div>
                </section>

                {/* Showing all girls after search */}
                <section className="girls-grid">
                    {filteredGirls.map((girl) => (
                        <article className="girl-card" key={girl.id}>
                            <div className="girl-card-main">
                                <div className="girl-avatar"></div>

                                <div className="girl-summary">
                                    <button
                                        className="girl-name-button"
                                        type="button"
                                        onClick={() => navigate("/beneficiary-profile")}
                                    >
                                        {girl.fullName}
                                    </button>
                                </div>
                            </div>

                            <div className="girl-info-grid">
                                <div>
                                    <span className="info-label girl-location">
                                        <MapPin className="location-icon" />
                                        <strong>{girl.state}/{girl.country}</strong></span>



                                </div>
                            </div>

                        </article>
                    ))}

                    {filteredGirls.length === 0 && (
                        <div className="empty-state">
                            <h2>No girls found</h2>
                        </div>
                    )}
                </section>
            </section>
                </main>
    </div>
    );
    
}

export default GirlsList;
