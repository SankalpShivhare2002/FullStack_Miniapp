import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="background-container">
        <img
          src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
          alt="bg-image"
          id="background-image"
        />
      </div>

      <div className="content hidden__display">
        <div className="login-content-root">
          <div className="back-login">
            <form autoComplete="off">
              <h2 className="login-heading">

                //code here


              </h2>

              <section className="login-section">
                <div className="login-email">
                  <div>
                    <label className="login-email-label">

                      //code here

                    </label>
                  </div>
                  <input
                    className="login-input"
                    type="email"
                    id="email"
                    required
                    name="username"
                    autoComplete="on"
                  />
                </div>
                <span className="email-error-span error-span">

                  //code

                </span>

                <div className="login-password">
                  <div>
                    <label className="login-password-label">
                      
                      //code

                    </label>
                  </div>
                  <div className="password-input-div">
                    <input
                      className="login-input"
                      type="password"
                      id="password"
                      required
                      name="password"
                    />
                    <img
                      id="show-password-img"
                      src="https://online.123fakturera.se/components/icons/show_password.png"
                      alt="pass-image"
                    />
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
