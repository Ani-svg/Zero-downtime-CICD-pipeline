import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="header">

      <div className="header-left">

        <img
          src={logo}
          alt="Women For Girls NGO"
          className="logo"
        />

        <div>
          <h1>Women For Girls NGO</h1>
          <p>Beneficiary Management System</p>
        </div>

      </div>

    </header>
  );
}

export default Navbar;