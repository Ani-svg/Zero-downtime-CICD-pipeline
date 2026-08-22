import "./PersonalDetails.css";

function PersonalDetails({ beneficiary, setBeneficiary, nextStep }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBeneficiary({
      ...beneficiary,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    setBeneficiary({
      ...beneficiary,
      profilePicture: e.target.files[0],
    });
  };

  return (
    <div className="personal-details">

      <h2>Personal Details</h2>

      <div className="profile-upload">

        <div className="profile-circle">

          {beneficiary.profilePicture ? (
            <img
              src={URL.createObjectURL(beneficiary.profilePicture)}
              alt="Profile"
            />
          ) : (
            <span>Upload Photo</span>
          )}

        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={beneficiary.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={beneficiary.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={beneficiary.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="text"
            name="phone"
            value={beneficiary.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={beneficiary.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>

          <select
            name="gender"
            value={beneficiary.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

        </div>

        <div className="form-group full-width">
          <label>Address</label>

          <textarea
            rows="4"
            name="address"
            value={beneficiary.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>City</label>

          <input
            type="text"
            name="city"
            value={beneficiary.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>State</label>

          <input
            type="text"
            name="state"
            value={beneficiary.state}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>

          <input
            type="text"
            name="pincode"
            value={beneficiary.pincode}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Joining</label>

          <input
            type="date"
            name="joiningDate"
            value={beneficiary.joiningDate}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="next-button">

        <button onClick={nextStep}>
          Next →
        </button>

      </div>

    </div>
  );
}

export default PersonalDetails;