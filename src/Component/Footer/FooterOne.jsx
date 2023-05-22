import React from "react";
import Card from "../../Common/Card";
function FooterOne() {
  return (
    <Card className="footer-nav">
      <h3 className="footer-logo">GohShop</h3>
      <p className="footer-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iste
        deserunt aperiam. Dignissimos, deleniti. Saepe maxime doloremque
        quaerat, sunt esse placeat, nulla reprehenderit illum,
      </p>
      <div className="app-container">
        <div>
          <i className="fa-brands fa-google-play"></i> Google Play
        </div>
        <div>
          <i className="fa-brands fa-apple"></i> App Store
        </div>
      </div>
    </Card>
  );
}

export default FooterOne;
