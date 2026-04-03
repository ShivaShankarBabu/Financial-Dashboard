import { useState } from "react";

export default function TransactionTable({ role, transactions, setTransactions }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  // Form state
  const [form, setForm] = useState({
    amount: '',
    category: '',
    type: 'expense',
    date: ''
  })

  // Handle input change
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // Add Transaction
  const handleSubmit = e => {
    e.preventDefault();

    if (!form.amount || !form.category || !form.date) {
      alert('Please fill all fields');
      return;
    }

    const newItem = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount)
    };

    setTransactions([...transactions, newItem]);

    // Reset Form
    setForm({
      amount: '',
      category: '',
      type: 'expense',
      date: ''
    });
  };

  const filteredData = transactions.filter(item => {
    return (
      item.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'all' || item.type === filter)
    );
  });

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4"> Transactions </h2>

      {/* Admin Button */}
      {role === 'admin' && (
        <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-2">
          <input 
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input 
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded md:col-span-4">
            Add Transaction
          </button>
        </form>
      )}
      {/* Search  + Filter */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input 
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />
        <select
          value={filter}
          className="border p-2 rounded w-full md:w-1/4"
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th> Date </th>
            <th> Amount </th>
            <th> Category </th>
            <th> Type </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id} className="border-b">
              <td> {item.date} </td>
              <td> {item.amount} </td>
              <td> {item.category} </td>
              <td> {item.type} </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <p className="text-center mt-4 text-gray-500">
          No transactions found
        </p>
      )}
    </div>
  );
}