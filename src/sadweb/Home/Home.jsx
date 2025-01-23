import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Using React Router's Link component
import './home.css';
import MailIcon from '../images/mailicon.svg';
import TelegramIcon from '../images/telegram.svg';
import background from '../images/background.jpg';
import image from '../images/dps.jpg';
import ProctorPage from '../Dashbord/Proctor/Proctor';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="maindiv">
      <header>
        <img src={background} alt="Addis Ababa University" />
        <div className="mainsection">
          <ul className="headerlists">
            <li className="item">
              <Link to="/">Home</Link> {/* Using Link component for routing */}
            </li>
            <li
              className="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Dashboard
              {showDropdown && (
                <ul className="dropdown">
                  <li>
                    <Link to="/signin">Student</Link> {/* React Router Link */}
                  </li>
                  <li>
                    <Link to="/signin">Admin</Link> {/* React Router Link */}
                  </li>
                  <li>
                    <Link to="/proctor">Proctor</Link> {/* React Router Link */}
                  </li>
                </ul>
              )}
            </li>
            <li className="item">
              <a href="#about">About Us</a> {/* Using Link component for routing */}
            </li>
            <li>
              <Link to="/signin">
                <button className="signinbutton" id="shortsign">
                  Sign In
                </button>
              </Link>

            </li>
          </ul>
        </div>
      </header>
      <div className="Sign">
        <h1 className="signinsection">
          Welcome to the Addis Ababa University <br />
          <span className="span1">Dormitory Placement System</span>
        </h1>
        <p className="animated-paragraph">
          We’re here to help you find your perfect home away from home. <br />
          Our system makes it easy to browse available rooms, check amenities, and submit
          your preferences.
        </p>
        <Link to="/signin">
        <button className="mainbutton signinbutton">Sign In</button>
        </Link>
      </div>
      <h2>
        Addis Ababa University <br /> Digital Dormitory Placement
      </h2>
      <section id="about">
        <div className="statment image">
          <img src={image} alt="" />
        </div>
        <div className="statment explain">
          <p>
            Addis Ababa University prioritizes providing quality housing for its
            students. Effective dormitory placement is crucial to ensuring a
            comfortable and conducive learning environment. By embracing digital
            solutions, we aim to streamline the allocation process, enhance
            transparency, and optimize resource utilization. Our goal is to
            provide a seamless and efficient experience for all students, making
            their transition to university life as smooth as possible.
          </p>
        </div>
      </section>
      <div className="Maincontent">
        <div className="contents">
          <p className="mininote">Contact Us</p>
          <div className="listicon">
            <ul className="mainlist">
              <li className="links links1">
                <a href="https://t.me/your_telegram_username">
                  <img className="iconimage" src={TelegramIcon} alt="Telegram" />
                </a>
              </li>
              <li className="links links2">
                <a href="mailto:your_email@example.com">
                  <img className="iconimage" src={MailIcon} alt="Email" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mainnote">
            <p className="note note1">Telegram Channel</p>
            <p className="note note2">Email Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
