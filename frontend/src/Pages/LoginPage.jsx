import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <div className="container-xxl bg-primary page-header">
        <h1 className="text-white text-center">Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
          <div class="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter Username"/>
          </div>
          <div class="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter Password"/>
          </div>
          <button type="submit" class="btn btn-success">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;