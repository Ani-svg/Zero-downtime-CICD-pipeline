import { useState, useEffect } from "react";
import "./EditModal.css";

function EditModal({ beneficiary, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    mentor: "",
    email: "",
    mobile: "",
    age: "",
    address: "",
    education: "",
    help: "",
    status: "Active",
  });

  useEffect(() => {
    if (beneficiary) {
      setFormData({
        name: beneficiary.name || "",
        mentor: beneficiary.mentor || "",
        email: beneficiary.email || "",
        mobile: beneficiary.mobile || "",
        age: beneficiary.age || "",
        address: beneficiary.address || "",
        education: beneficiary.education || "",
        help: beneficiary.help || "",
        status: beneficiary.status || "Active",
      });
    }
  }, [beneficiary]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {

  const confirmSave = window.confirm(
    "Are you sure you want to save the changes?"
  );

  if (!confirmSave) return;

  onSave(formData);
  onClose();

};
  

  if (!beneficiary) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="edit-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="modal-title">
          Women For Girls NGO
        </h1>

        <p className="modal-subtitle">
          Edit Beneficiary Details
        </p>

        <div className="edit-form">

          <div className="form-group">
            <label>Beneficiary Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mentor Name</label>
            <input
              type="text"
              name="mentor"
              value={formData.mentor}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Help Provided</label>
            <textarea
              rows="3"
              name="help"
              value={formData.help}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

        </div>

        <div className="button-group">

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditModal;