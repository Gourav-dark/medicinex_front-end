import React from 'react';

//import { BiLogIn } from "react-icons/bi";

import { useState } from "react";

import axios from 'axios';

import { useNavigate } from 'react-router-dom';




const Register = () => {

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({

    "firstName": "",

    "lastName": "",

    "password": "",

    "email_id": "",

    "type": "user",

    "status": 0,

    "createdon": "2023-06-29"

  });

  const handleInput = (event) => {

    const { name, value } = event.target;

    setLoginDetail((prev) => {

      return { ...prev, [name]: value };

    });

  }




  function handleSave() {

    console.log(loginDetail);

    axios.post(`https://localhost:7027/api/Users/Register`, loginDetail).then((response) => {

      if (response.data === "Already have an account") {

        alert('Already have an account please Login.')

      }

      else {

        alert('Successfully Registered!! Please Login Now')

        console.log(response);

      }

      navigate('/login');

    }).catch((error) => {

      alert('Something went wrong');

      console.log('error');

    });

    // navigate("/");

  }
  return (

    <div className="SignUp">

      <div className="mask d-flex align-items-center h-100 gradient-custom-3">

        <div className="container h-100">

          <div className="row d-flex justify-content-center align-items-center h-100">

            <div className="col-12 col-md-9 col-lg-7 col-xl-6">

              <div className="card" style={{ borderradius: '15px' }}>

                <div className="card-body p-5">

                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>




                  <form>




                    <div className="form-outline mb-4">

                      <input type="text" className="form-control form-control-lg" value={loginDetail.firstName} onChange={handleInput} name="firstName" />

                      <label className="form-label" for="form3Example1cg">First Name</label>

                    </div>

                    <div className="form-outline mb-4">

                      <input type="text" className="form-control form-control-lg" value={loginDetail.lastName} onChange={handleInput} name="lastName" />

                      <label className="form-label" for="form3Example1cg">Last Name</label>

                    </div>




                    <div className="form-outline mb-4">

                      <input type="email" className="form-control form-control-lg" value={loginDetail.email_id} onChange={handleInput} name="email_id" />

                      <label className="form-label" for="form3Example3cg">Email Address</label>

                    </div>




                    <div className="form-outline mb-4">

                      <input type="password" className="form-control form-control-lg" value={loginDetail.password} onChange={handleInput} name="password" />

                      <label className="form-label" for="form3Example4cg">Password</label>

                    </div>

                    <div className="d-flex justify-content-center">

                      <button type="button"

                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleSave}>Register</button>

                    </div>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>




  );

}




export default Register;  