import HealthMetricCard from '../components/widgets/HealthMetricCard'
import HealthTrendsChart from '../components/charts/HealthTrendsChart'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Health Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <HealthMetricCard 
          title="Total Patients" 
          value="1,245" 
          change={12.5} 
          trend="up"
        />
        {/* Add more cards */}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HealthTrendsChart />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Health Alerts</h3>
          {/* Add alerts component */}
        </div>
      </div>
    </div>
  )
}