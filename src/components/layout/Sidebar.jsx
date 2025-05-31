import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">VitalBoard</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/patients" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/reports" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}