import { useState } from 'react';

export default function HealthAlerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Malaria Spike",
      severity: "High",
      location: "Region X",
      date: "2023-11-10",
      status: "Active",
      cases: 28
    },
    // ... more alerts
  ]);

  const severityColors = {
    Critical: "bg-red-100 border-red-500 text-red-700",
    High: "bg-orange-100 border-orange-500 text-orange-700",
    Medium: "bg-yellow-100 border-yellow-500 text-yellow-700",
    Low: "bg-blue-100 border-blue-500 text-blue-700"
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4 flex justify-between">
        Recent Health Alerts
        <span className="text-sm font-normal">
          <button className="text-indigo-600 hover:underline">
            View All →
          </button>
        </span>
      </h3>
      
      <div className="space-y-3">
        {alerts.map(alert => (
          <div 
            key={alert.id}
            className={`border-l-4 p-3 rounded-r ${severityColors[alert.severity]}`}
          >
            <div className="flex justify-between">
              <h4 className="font-medium">{alert.title}</h4>
              <span className="text-xs">{alert.date}</span>
            </div>
            <p className="text-sm mt-1">
              <span className="font-semibold">{alert.cases} cases</span> in {alert.location}
            </p>
            <div className="flex justify-between mt-2 text-xs">
              <span className="capitalize">{alert.status.toLowerCase()}</span>
              <button className="text-indigo-600 hover:underline">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}