// import { useNavigate } from "react-router-dom";
// import "../styles/adminDashboard.css";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("adminLoggedIn");
//     navigate("/login");
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-header">
//         <h1>Admin Dashboard</h1>
//         <button onClick={logout}>Logout</button>
//       </div>

//       <div className="admin-cards">
//         <div className="card">📅 Total Bookings: 12</div>
//         <div className="card">👤 Customers: 8</div>
//         <div className="card">💇 Services: 5</div>
//       </div>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import "../styles/adminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/login");
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="admin-cards">
        <div className="card">
          📅 <span>Total Bookings</span>
          <strong>12</strong>
        </div>

        <div className="card">
          👤 <span>Customers</span>
          <strong>8</strong>
        </div>

        <div className="card">
          💇 <span>Services</span>
          <strong>5</strong>
        </div>
      </div>
    </div>
  );
}
