import Card from "../../Common/Card";
import "./Footer.css";
import Footerfour from "./Footerfour";
import FooterOne from "./FooterOne";
import FooterThree from "./FooterThree";
import FooterTwo from "./FooterTwo";
function Footer() {
  return (
    <footer className="footer-section">
      <Card className="footer container">
        <FooterOne />
        <FooterTwo />
        <FooterThree />
        <Footerfour />
      </Card>
    </footer>
  );
}

export default Footer;
