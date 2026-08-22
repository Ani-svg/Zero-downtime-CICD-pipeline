import { useState } from "react";
import beneficiariesData from "../data/beneficiaries";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BeneficiaryCard from "../components/BeneficiaryCard";
import ViewModal from "../components/ViewModal";
import EditModal from "../components/EditModal";

import "../App.css";

function Dashboard() {

  const [beneficiaries, setBeneficiaries] = useState(beneficiariesData);

  const [search, setSearch] = useState("");

  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const filteredBeneficiaries = beneficiaries.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = beneficiaries.length;

  const active = beneficiaries.filter(
    (b) => b.status === "Active"
  ).length;

  const inactive = beneficiaries.filter(
    (b) => b.status === "Inactive"
  ).length;

  const pending = beneficiaries.filter(
    (b) => b.status === "Pending"
  ).length;

  const handleSave = (updatedBeneficiary) => {

    setBeneficiaries(
      beneficiaries.map((b) =>
        b.id === selectedBeneficiary.id
          ? { ...b, ...updatedBeneficiary }
          : b
      )
    );

    setEditOpen(false);

  };

  return (

    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">

        <div className="dashboard">


      <Navbar />

      <div className="stats-container">

        <div className="stat-card">
          <h2>{total}</h2>
          <p>Total Beneficiaries</p>
        </div>

        <div className="stat-card">
          <h2>{active}</h2>
          <p>Active</p>
        </div>

        <div className="stat-card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h2>{inactive}</h2>
          <p>Inactive</p>
        </div>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="card-container">

        {filteredBeneficiaries.map((beneficiary) => (

          <BeneficiaryCard

            key={beneficiary.id}

            beneficiary={beneficiary}

            onView={() => {

              setSelectedBeneficiary(beneficiary);

              setViewOpen(true);

            }}

            onEdit={() => {

              setSelectedBeneficiary(beneficiary);

              setEditOpen(true);

            }}

          />

        ))}

      </div>

      <ViewModal
    open={viewOpen}
    beneficiary={selectedBeneficiary}
    onClose={() => setViewOpen(false)}
/>

      {editOpen && (
    <EditModal
        beneficiary={selectedBeneficiary}
        onClose={() => setEditOpen(false)}
        onSave={handleSave}
    />
)}

    </div>
  </div>
</div>  
    

  );

}

export default Dashboard;