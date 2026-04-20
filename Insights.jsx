function Insights({ transactions }) {

  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const savings = income - expense;

  let message = "";

  if (savings > 0) {
    message = "Great! You are saving money this month.";
  } else {
    message = "Warning: Expenses are higher than income.";
  }

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        borderRadius: "10px",
        background: "#eef2ff"
      }}
    >
      <h2>Financial Insights</h2>

      <p>Total Income: ₹{income}</p>
      <p>Total Expense: ₹{expense}</p>
      <p>Net Savings: ₹{savings}</p>

      <strong>{message}</strong>
    </div>
  );
}

export default Insights;