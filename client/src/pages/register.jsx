import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../components/api/api";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigte = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE}/register`, inputs);
      navigte("/login");

      setInputs("");
    } catch (err) {
      console.log(err.message);
      setError(err.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className="auth">
      <h1>Register</h1>

      <form>
        <input
          required
          type="text"
          placeholder="user name"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="user email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
