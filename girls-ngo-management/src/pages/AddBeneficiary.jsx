import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PersonalDetails from "../components/PersonalDetails";
import DocumentsUpload from "../components/DocumentsUpload";

import "../components/AddBeneficiary.css";

function AddBeneficiary() {
  const [step, setStep] = useState(1);

  const [beneficiary, setBeneficiary] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    joiningDate: "",
    profilePicture: null,
  });

  const [documents, setDocuments] = useState({
    aadhaar: null,
    addressProof: null,
    birthCertificate: null,
  });

  const handleSave = () => {
    alert("Beneficiary Added Successfully!");
  };

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

        <div className="add-beneficiary-page">

          <h1>Add Beneficiary</h1>

          <div className="beneficiary-container">

            <div className="steps">

              <div className={step === 1 ? "step active" : "step"}>
                Personal Details
              </div>

              <div className={step === 2 ? "step active" : "step"}>
                Documents
              </div>

            </div>

            <div className="form-container">

              {step === 1 ? (
                <PersonalDetails
                  beneficiary={beneficiary}
                  setBeneficiary={setBeneficiary}
                  nextStep={() => setStep(2)}
                />
              ) : (
                <DocumentsUpload
                  documents={documents}
                  setDocuments={setDocuments}
                  previousStep={() => setStep(1)}
                  handleSave={handleSave}
                />
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddBeneficiary;