function TransactionsTable({ transactions, role }) {

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Transactions</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>{t.amount}</td>
              <td>{t.type}</td>

              {role === "admin" && (
                <td>
                  <button>Edit</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default TransactionsTable;