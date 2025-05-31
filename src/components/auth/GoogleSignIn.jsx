import { useAuth } from "../../hooks/useAuth";

export default function GoogleSignIn() {
  const { signInWithGoogle, loading } = useAuth();

  return (
    <button 
      onClick={signInWithGoogle}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    >
      <img 
        src="https://www.google.com/favicon.ico" 
        alt="Google" 
        className="h-4 w-4" 
      />
      {loading ? 'Signing in...' : 'Continue with Google'}
    </button>
  );
}