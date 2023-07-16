import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">&copy; {new Date().getFullYear()} Created By Javed Ansari.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
