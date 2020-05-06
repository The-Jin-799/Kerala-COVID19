import React from "react";
import "./styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <span className="year">© 2020</span>
      <a
        className="dataSource"
        href="https://dhs.kerala.gov.in/category/daily-bulletin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Data Source
      </a>
    </footer>
  );
};

export default Footer;
