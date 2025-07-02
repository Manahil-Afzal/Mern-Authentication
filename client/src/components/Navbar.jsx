import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      alert("Logout failed");
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Auth
      </h1>
      <div className="space-x-4">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded"
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
