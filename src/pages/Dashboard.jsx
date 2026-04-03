import SummaryCard from '../components/SummaryCard'
import TransactionTable from '../components/TransactionTable'
import { useState, useEffect } from 'react'
import RoleSwitcher from '../components/RoleSwitcher'
import Charts from '../components/Charts'
import Insights from '../components/Insights'

export default function Dashboard() {
  const [role, setRole] = useState('viewer')
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem('transactions', 
      JSON.stringify(transactions)
    )
  }, [transactions]);

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'> Financial Dashboard </h1>

      <RoleSwitcher role={role} setRole={setRole} />

      { /* Summary Cards */  }
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <SummaryCard title='Total Balance' amount='$50,000' />
        <SummaryCard title='Income' amount='$70,000' />
        <SummaryCard title='Expenses' amount='$20,000' />
      </div>

      <Charts transactions={transactions} />

      <TransactionTable 
        role={role} 
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <Insights transactions={transactions} />
    </div>
  );
}