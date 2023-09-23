import classes from "../../../styles/components/layouts/Footer.module.scss";
import { CiTwitter, CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_wrapper}>
        <div className={classes.footer_logo}>
          <h5>Glogos</h5>
          <p>
            Empowering Social Media Analysis for <br /> Impactful Insights.
          </p>
          <div>
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
            <CiFacebook />
          </div>
        </div>
        <div className={classes.footer_info}>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>HearUs Innovations | 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
