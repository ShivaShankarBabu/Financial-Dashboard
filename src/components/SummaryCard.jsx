export default function SummaryCard({ title, amount }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-gray-500"> {title} </h2>
      <p className="text-xl font-bold mt-2"> {amount} </p>
    </div>
  )
}