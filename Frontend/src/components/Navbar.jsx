import React from "react";
import "../styles/Navbar.css";
import Hamburger from "../components/Hamburger";


const Navbar = () => {
  return (
    <nav className="nav-out">
      <header className="nav-header">
        <section className="nav-section">
          <div className="logo">
            <img
              alt=""
              class="nav-logo"
              src="https://storage.123fakturera.se/public/icons/diamond.png"
            />
          </div>
          <div className="open-menu-dds">
            <Hamburger /> 
          </div>

          <div className="nav-menu-bar">
            <div className="menu-drop-down">
              <div className="menu-drop-down-container">

                //code here


              </div>
            </div>

            <div className="pc-menu">

              //code here


            </div>

            <div className="lang-drop">
              <div className="lang-drop-container">
                <div className="dropdownList">


                  //code here

                </div>
              </div>
            </div>
          </div>

          <div className="lang-drop">
            <div>
              <div className="dropdownContainer">


                //write code here


              </div>
              <div className="dropdownList">


                //code here

              </div>
            </div>
          </div>
        </section>
      </header>
    </nav>
  );
};

export default Navbar;
