import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>

      <form>
        <input required type="text" placeholder="user name" />
        <input required type="email" placeholder="user email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>This is an Error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
