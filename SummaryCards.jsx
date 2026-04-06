function SummaryCards({ transactions }) {

  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const balance = income - expense;

  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    color: "white"
  };

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

      <div style={{ ...cardStyle, background: "#10B981" }}>
        <h3>Income</h3>
        <p>₹{income}</p>
      </div>

      <div style={{ ...cardStyle, background: "#EF4444" }}>
        <h3>Expense</h3>
        <p>₹{expense}</p>
      </div>

      <div style={{ ...cardStyle, background: "#4F46E5" }}>
        <h3>Balance</h3>
        <p>₹{balance}</p>
      </div>

    </div>
  );
}

export default SummaryCards;