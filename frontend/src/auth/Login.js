import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
     <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-center p-2">
                <div class="brand-logo">
                  <img src="../../assets/images/login.png" alt='error'/>
                </div>
              
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div class="mt-3">
                    <Link class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="user/dashboard/">SIGN IN</Link>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                   
                    <Link to="/" class="auth-link text-black">Forgot password?</Link>
                  </div>
                  <div class="mb-2">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Don't have an account? <Link to="/register" class="text-primary">Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    </div>
    </>
  )
}

export default Login