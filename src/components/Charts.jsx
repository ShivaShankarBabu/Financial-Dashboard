import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function Charts({ transactions }) {
  // 1. Line chart data (group by date)
  const groupedByDate = {};

  transactions.forEach(t => {
    if (!groupedByDate[t.date]) {
      groupedByDate[t.date] = 0;
    }

    if (t.type === 'income') {
      groupedByDate[t.date] += t.amount;
    } else {
      groupedByDate[t.date] -= t.amount;
    }
  });

  const lineData = Object.keys(groupedByDate).map(date => ({
    date,
    balance: groupedByDate[date]
  }));

  //2. Pie chart data (category-wise expense)
  const categoryMap = {};

  transactions.forEach(t => {
    if (t.type === 'expense') {
      if (!categoryMap[t.category]) {
        categoryMap[t.category] = 0;
      }
      categoryMap[t.category] += t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map(category => ({
    name: category,
    value: categoryMap[category]
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  lineData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>

      {/* line chart */}
      <div className='bg-white p-4 rounded shadow'>
        <h2 className='mb-4 font-semibold'> Balance Trend </h2>

        <LineChart width={350} height={250} data={lineData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* pie chart */}
      <div className='bg-white p-4 rounded shadow'>
        <h2 className='mb-4 font-semibold'> Spending Breakdown </h2>
        <PieChart width={350} height={250}>
          <Pie
            data={pieData}
            outerRadius={90}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
