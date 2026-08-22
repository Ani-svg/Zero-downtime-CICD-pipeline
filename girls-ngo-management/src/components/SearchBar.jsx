import "./SearchBar.css";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar({ search, setSearch }) {
  const navigate = useNavigate();

  return (
    <div className="search-bar-container">

      <div className="search-input">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search beneficiary by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <button
        className="add-beneficiary-btn"
        onClick={() => navigate("/add-beneficiary")}
      >
        <FaPlus />
        Add Beneficiary
      </button>

    </div>
  );
}

export default SearchBar;