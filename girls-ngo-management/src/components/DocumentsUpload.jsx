import "./DocumentsUpload.css";
import { FaCloudUploadAlt, FaFileAlt, FaTrash } from "react-icons/fa";

function DocumentsUpload({
  documents,
  setDocuments,
  previousStep,
  handleSave,
}) {

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setDocuments({
      ...documents,
      [name]: files[0],
    });
  };

  const removeFile = (name) => {
    setDocuments({
      ...documents,
      [name]: null,
    });
  };

  const UploadCard = ({ title, name }) => (
    <div className="upload-card">

      <h3>{title}</h3>

      {!documents[name] ? (

        <label className="upload-box">

          <FaCloudUploadAlt className="upload-icon" />

          <h4>Upload File</h4>

          <p>Drag & Drop or Click to Browse</p>

          <span>Accepted: PDF, JPG, PNG</span>

          <input
            type="file"
            hidden
            name={name}
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />

        </label>

      ) : (

        <div className="uploaded-file">

          <div className="file-info">

            <FaFileAlt className="file-icon" />

            <div>
              <h4>{documents[name].name}</h4>
              <small>
                {(documents[name].size / 1024).toFixed(1)} KB
              </small>
            </div>

          </div>

          <button
            className="delete-btn"
            onClick={() => removeFile(name)}
          >
            <FaTrash />
          </button>

        </div>

      )}

    </div>
  );

  return (

    <div className="documents-container">

      <h2>Upload Documents</h2>

      <p className="subtitle">
        Please upload the required documents.
      </p>

      <div className="documents-grid">

        <UploadCard
          title="Aadhaar Card"
          name="aadhaar"
        />

        <UploadCard
          title="Address Proof"
          name="addressProof"
        />

        <UploadCard
          title="Birth Certificate"
          name="birthCertificate"
        />

      </div>

      <div className="document-buttons">

        <button
          className="back-btn"
          onClick={previousStep}
        >
          ← Back
        </button>

        <button
          className="save-btn"
          onClick={handleSave}
        >
          Save Beneficiary
        </button>

      </div>

    </div>

  );
}

export default DocumentsUpload;