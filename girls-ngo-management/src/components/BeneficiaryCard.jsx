function BeneficiaryCard({ beneficiary, onView, onEdit }) {

  const getStatusClass = () => {
    if (beneficiary.status === "Active") return "active";
    if (beneficiary.status === "Pending") return "pending";
    return "inactive";
  };

  return (
    <div className="card">

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#e45c4d",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          {beneficiary.name.charAt(0)}
        </div>

        <div>
          <h2>{beneficiary.name}</h2>

          <span className={`status ${getStatusClass()}`}>
            {beneficiary.status}
          </span>
        </div>
      </div>

      <p>
        <strong>Mentor:</strong> {beneficiary.mentor}
      </p>

      <p>
        <strong>Email:</strong> {beneficiary.email}
      </p>

      <p>
        <strong>Education:</strong> {beneficiary.education}
      </p>

      <p>
        <strong>Age:</strong> {beneficiary.age}
      </p>

      <div className="card-buttons">

        <button
          className="view-btn"
          onClick={onView}
        >
          👁 View
        </button>

        <button
          className="edit-btn"
          onClick={onEdit}
        >
          ✏ Edit
        </button>

      </div>

    </div>
  );
}

export default BeneficiaryCard;