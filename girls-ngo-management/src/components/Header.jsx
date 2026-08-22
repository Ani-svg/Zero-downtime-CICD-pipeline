import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="header">

      <h1>{title}</h1>

      <div className="user">

        <img
          src="https://i.pravatar.cc/100"
          alt="user"
        />

        <span>Admin</span>

      </div>

    </header>
  );
}