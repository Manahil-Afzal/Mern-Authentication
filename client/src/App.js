import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";
import robot from "./assets/robot.png";
import { AuthProvider } from "./context/AuthContext";
import Login from './pages/Login';
import Register from './pages/Register';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
      {/* Top Navigation */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <SiAuth0 className="text-2xl text-cyan-400" />
        <span className="text-lg font-bold">Auth</span>
      </div>

      <div
        onClick={() => navigate("/login")}
        className="absolute top-4 right-4 flex items-center space-x-2 cursor-pointer"
      >
        <span className="text-lg">Login</span>
        <FaSignInAlt className="text-xl" />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center space-y-6 mt-32">
        <img src={robot} alt="Robot" className="w-64 h-auto" />
        <h1 className="text-3xl md:text-4xl font-extrabold">Welcome to Our Auth App</h1>
        <p className="text-gray-300 max-w-md">
          Experience modern authentication with ease. Our app lets you register, verify, and manage users securely.
        </p>
        <button
          className="mt-4 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
