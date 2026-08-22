import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddBeneficiary from "./pages/AddBeneficiary";
import AddMentor from "./pages/AddMentor";
import WfgDashboard from "./pages/WfgDashboard";

// Chahat's pages
import GirlsList from "./pages/GirlsList";
import GirlProfile from "./pages/GirlProfile";
import MentorsProfile from "./pages/MentorsProfile";
import OurMentors from "./pages/OurMentors";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Beneficiaries */}
        <Route path="/add-beneficiary" element={<AddBeneficiary />} />
        <Route path="/beneficiary-list" element={<GirlsList />} />
        <Route path="/beneficiary-profile" element={<GirlProfile />} />

        {/* Mentors */}
        <Route path="/add-mentor" element={<AddMentor />} />
        <Route path="/mentor-profile" element={<MentorsProfile />} />
        <Route path="/mentor-list" element={<OurMentors />} />

        {/* Analytics */}
        <Route path="/analytics" element={<WfgDashboard />} />

        {/* Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;