import React from "react";
import "../styles/Login.css";
import "../styles/footer.css";
import bg from "../assets/sverige43.jpg";
import { useState, useContext } from "react";
import { LanguageContext } from "../components/LangContext.jsx";
import { loginUser } from "../utils/apis.js";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  const { language, translatedText } = useContext(LanguageContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await loginUser(email, password);
    console.log("Login API Response:", res);

    // If backend sends error
    if (res?.status === false) {
  if (res.field === "email") {
    setEmailError(res.message);
    setPasswordError("");
  } else if (res.field === "password") {
    setPasswordError(res.message);
    setEmailError("");
  } else {
    setEmailError(res.message);
    setPasswordError("");
  }

  return;
}
    // Clear errors on successful login of user
    setEmailError("");
    setPasswordError("");
    alert(res.message);
  };
  
  return (
    <div className="login-container">
      <div className="background-container">
        <img src={bg} alt="bg-image" id="background-image" />
      </div>

      <div className="content">
        <div className="login-content-root">
          <div className="back-login">
            <form autoComplete="off" onSubmit={handleLogin}>
              <h2 className="login-heading">
                {translatedText[language]?.title || "Log in"}
              </h2>

              <section className="login-section">
                {/* EMAIL */}
                <div className="login-email">
                  <label className="login-email-label">
                    {translatedText[language]?.emaillbl || "Email address"}
                  </label>

                  <input
                    className="login-input"
                    type="email"
                    value={email}
                    placeholder={
                      translatedText[language]?.emailplcehldr || "Email address"
                    }
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailError("")}
                    required
                  />
                </div>

                {/* {emailError && ( */}
                  <span className="email-error error-span">{emailError}</span>
                {/* )} */}

                {/* PASSWORD */}
                <div className="login-password">
                  <label className="login-password-label">
                    {translatedText[language]?.passlbl || "Password"}
                  </label>

                  <div className="password-input-div">
                    <input
                      className="login-input"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      placeholder={
                        translatedText[language]?.passplcehldr || "Password"
                      }
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setPasswordError("")}
                      required
                    />

                    <img
                      onClick={() => setShowPassword((prev) => !prev)}
                      id="show-password-img"
                      src={
                        showPassword
                          ? "https://online.123fakturera.se/components/icons/show_password.png"
                          : "https://online.123fakturera.se/components/icons/hide_password.png"
                      }
                      alt="pass-toggle"
                    />
                  </div>

                  {passwordError && (
                    <span className="error-span">{passwordError}</span>
                  )}
                </div>
              </section>

              <div className="Login-button">
                <button className="login-btn" type="submit">
                  {translatedText[language]?.loginbtn || "Log in"}
                </button>
              </div>

              <section className="other-links">
                <span>{translatedText[language]?.loginnew || "Register"}</span>
                <span>
                  {translatedText[language]?.loginforgopass ||
                    "Forgotten password?"}
                </span>
              </section>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <footer className="footer-div">
          <div
            className="footer-text-section"
            style={{ borderBottom: "1px solid white" }}
          >
            <div className="footer-text">123 Fakturera </div>
            <div className="footer-menu">
              <span>
                <p>{translatedText[language]?.home || "Home"}</p>
              </span>
              <span>
                <p>{translatedText[language]?.order || "Order"}</p> 
              </span>
              <span>
                <p>{translatedText[language]?.contact || "Contact us"}</p>
              </span>
            </div>
          </div>
          <div className="footer-copyright">
            <p className="copyright-text">
              © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
