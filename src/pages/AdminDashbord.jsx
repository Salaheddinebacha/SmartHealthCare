import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8081/api/admin/accounts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Erreur chargement comptes");
        const data = await res.json();
        setAccounts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchAccounts();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Tableau de bord Admin</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((compte) => (
            <tr key={compte.id}>
              <td>{compte.nom}</td>
              <td>{compte.email}</td>
              <td>{compte.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
