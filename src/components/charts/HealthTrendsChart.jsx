import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', patients: 400 },
  { name: 'Feb', patients: 300 },
  { name: 'Mar', patients: 600 },
  { name: 'Apr', patients: 800 },
  { name: 'May', patients: 500 },
  { name: 'Jun', patients: 900 },
]

export default function HealthTrendsChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6 h-80">
      <h3 className="text-lg font-semibold mb-4">Patient Trends</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="patients" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}