import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner footer">
        <div className="title">
          <h1>iDo Events</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>SignUp</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
