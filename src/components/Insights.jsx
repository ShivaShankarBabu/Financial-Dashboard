export default function Insights({ transactions }) {
  const expenses = transactions.filter(
    t => t.type === 'expense'
  );
  const totalExpenses = expenses.reduce(
    (sum, t) => sum + t.amount, 0
  );

  const categories = {};
  expenses.forEach(t => {
    categories[t.category] = (categories[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categories).reduce(
    (a, b) => categories[a] > categories[b] ? a : b, 
    Object.keys(categories)[0] || 'None'
  );

  return (
    <div className="bg-white p-4  rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4"> Insights </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-gray-100 rounded">
          <p> Total Expense </p>
          <h3 className="Font-bold"> ${totalExpenses} </h3>
        </div>
        <div className="p-3 bg-gray-100 rounded">
          <p> Top Category </p>
          <h3 className="Font-bold"> {highestCategory} </h3>
        </div>
        <div className="p-3 bg-gray-100 rounded">
          <p> Transactions </p>
          <h3 className="Font-bold"> {transactions.length} </h3>
        </div>
      </div>
    </div>
  );
}