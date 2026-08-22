import "./ViewModal.css";

function ViewModal({ open, beneficiary, onClose }) {
  if (!open || !beneficiary) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="view-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="modal-title">
          Women For Girls NGO
        </h1>

        <p className="modal-subtitle">
          Beneficiary Profile
        </p>

        <div className="profile-grid">

          <div className="profile-item">
            <label>Beneficiary Name</label>
            <p>{beneficiary.name}</p>
          </div>

          <div className="profile-item">
            <label>Mentor Name</label>
            <p>{beneficiary.mentor}</p>
          </div>

          <div className="profile-item">
            <label>Email</label>
            <p>{beneficiary.email}</p>
          </div>

          <div className="profile-item">
            <label>Mobile Number</label>
            <p>{beneficiary.mobile}</p>
          </div>

          <div className="profile-item">
            <label>Age</label>
            <p>{beneficiary.age}</p>
          </div>

          <div className="profile-item">
            <label>Education</label>
            <p>{beneficiary.education}</p>
          </div>

          <div className="profile-item full">
            <label>Address</label>
            <p>{beneficiary.address}</p>
          </div>

          <div className="profile-item full">
            <label>Help Provided</label>
            <p>{beneficiary.help}</p>
          </div>

          <div className="profile-item full">
            <label>Status</label>
            <p className={`status ${beneficiary.status.toLowerCase()}`}>
              {beneficiary.status}
            </p>
          </div>

        </div>

        <div className="button-group">

          <button
            className="close-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default ViewModal;