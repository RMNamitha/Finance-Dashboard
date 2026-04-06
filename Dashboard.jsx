import { useState } from "react";
import { transactionsData } from "./data";
import SummaryCards from "./SummaryCards";
import TransactionsTable from "./TransactionsTable";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import Insights from "./Insights";

function Dashboard() {

  const [transactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  return (
    <div
      style={{
        padding: "30px",
        background: "#f9fafc",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >

      <h1 style={{ marginBottom: "20px" }}>Finance Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        Role:
        <select
          style={{ marginLeft: "10px", padding: "5px" }}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Summary Cards */}
      <SummaryCards transactions={transactions} />

      {/* Chart + Table Row */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "40px",
          alignItems: "flex-start"
        }}
      >

        {/* Line Chart */}
        <div style={{ flex: 1 }}>
          <LineChart transactions={transactions} />
        </div>

        {/* Transactions Table */}
        <div style={{ flex: 1 }}>
          <TransactionsTable
            transactions={transactions}
            role={role}
          />
        </div>

      </div>

      {/* Pie Chart */}
      <PieChart transactions={transactions} />

      {/* Insights */}
      <Insights transactions={transactions} />

    </div>
  );
}

export default Dashboard;