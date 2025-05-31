import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-medium text-gray-800">Vaccine Network Dashboard</h1>
        </div>
        {user && ( // Check if user is logged in
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Welcome, {user.email}
            </span>
            <button
              onClick={logout}
              className="px-3 py-1 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}