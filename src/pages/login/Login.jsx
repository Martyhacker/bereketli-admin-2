import React from 'react';
import imgLogo from '../../assets/img/logo.png'
const Login = () => {
  return (
    <div className="container">

    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div className="d-flex justify-content-center py-4">
                <div classNameName='logo d-flex align-items-center w-auto'>
                <img src={imgLogo} alt=""/>
                <span className="d-none d-lg-block">Welcome</span>
                </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                  <p className="text-center small">Enter your username & password to login</p>
                </div>
                <form className="row g-3 needs-validation" novalidate>
                  <div className="col-12">
                    <div className="input-group has-validation">
                      <input type="text" placeholder='Username' className="form-control" required/>
                      <div className="invalid-feedback">Please enter your username.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <input type="password"  placeholder='Password' className="form-control" required/>
                    <div className="invalid-feedback">Please enter your password!</div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Login</button>
                  </div>
                  
                </form>

              </div>
            </div>

            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">Umyt Inc.</a>
            </div>

          </div>
        </div>
      </div>

    </section>

  </div>
  );
};

export default Login;
