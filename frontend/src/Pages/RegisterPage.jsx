import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, first_name, last_name, password, password2);
  };

  return (
    <section>
      <div className="container-xxl bg-primary page-header">
        <h1 className="text-white text-center">Register</h1>
      </div>
      <form class="row g-3" onSubmit={handleSubmit}>
        {/* <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"/>
        </div> */}
        <div class="col-12">
          <label htmlFor="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username" required onChange={e => setUsername(e.target.value)}/>
        </div>
        <div class="col-12">
          <label htmlFor="first_name" class="form-label">First Name</label>
          <input type="text" class="form-control" id="first_name" placeholder="First Name" required onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div class="col-12">
          <label htmlFor="last_name" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="last_name" placeholder="Last Name" required onChange={e => setLastName(e.target.value)}/>
        </div>
        <div>
        <div class="col-md-6">
          <label htmlFor="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required/>
        </div>
        <div class="col-md-6">
          <label htmlFor="confirm-password" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="confirm-password" onChange={e => setPassword2(e.target.value)}
            placeholder="Password"
            required/>
        </div>
        <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </form>

    </section>
  );
}

export default Register;