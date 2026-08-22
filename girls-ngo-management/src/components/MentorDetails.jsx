import "./MentorDetails.css";

function MentorDetails({ mentor, setMentor, handleSave }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMentor({
      ...mentor,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    setMentor({
      ...mentor,
      profilePicture: e.target.files[0],
    });
  };

  return (
    <div className="mentor-form">

      <div className="profile-upload">

        <div className="profile-circle">

          {mentor.profilePicture ? (
            <img
              src={URL.createObjectURL(mentor.profilePicture)}
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
            value={mentor.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={mentor.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={mentor.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="text"
            name="phone"
            value={mentor.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={mentor.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>

          <select
            name="gender"
            value={mentor.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

        </div>

        <div className="form-group">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            value={mentor.qualification}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            value={mentor.occupation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Years of Experience</label>
          <input
            type="number"
            name="experience"
            value={mentor.experience}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Specialization</label>
          <input
            type="text"
            name="specialization"
            value={mentor.specialization}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>

          <textarea
            rows="4"
            name="address"
            value={mentor.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={mentor.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={mentor.state}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={mentor.pincode}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="mentor-buttons">

        <button
          className="cancel-btn"
          type="button"
        >
          Cancel
        </button>

        <button
          className="save-btn"
          type="button"
          onClick={handleSave}
        >
          Save Mentor
        </button>

      </div>

    </div>
  );
}

export default MentorDetails;