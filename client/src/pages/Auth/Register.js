import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify';

function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
     
    const handleSubmit = (e) => {e.preventDefault()
    console.log(name,email,password,address,phone);
    toast.success('Register successfully');
};
  return (
    <Layout title="Register- Ecommerce App">
      <div className="register">
        <h1>Register page</h1>
        <form>
        <div className="form-group">
              <input
              type="text"
              value = {name}
              onChange = {(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value = {phone}
              onChange = {(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your phone"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value = {address}
              onChange = {(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your address"
              required
            />
          </div>

         
         
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
