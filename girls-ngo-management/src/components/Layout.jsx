import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

export default function Layout({ title, children }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Header title={title} />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}