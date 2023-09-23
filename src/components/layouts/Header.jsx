import { useState } from "react";
import classes from "../../../styles/components/layouts/Header.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.header_logo}>
        <h1>Glogos.ai</h1>
      </div>
      <nav className={classes.header_nav}>
        <a href="#">about</a>
        <a href="#">pricing</a>
        <a href="#">features</a>
        <a href="#">support</a>
      </nav>
      <div className={classes.header_button}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <div className={classes.header_mobile_button}>
        {!showMobileNav && (
          <AiOutlineMenu onClick={() => setShowMobileNav(!showMobileNav)} />
        )}
        {showMobileNav && (
          <AiOutlineClose onClick={() => setShowMobileNav(!showMobileNav)} />
        )}
      </div>
      {showMobileNav && (
        <motion.div
          initial={{ left:'-100vw' }}
          animate={{ left:'5vw' }}
          transition={{ duration: 0.5 }}
          className={classes.header_mobile_nav}
        >
          <a href="#">about</a>
          <a href="#">pricing</a>
          <a href="#">features</a>
          <a href="#">support</a>
          <button>Login</button>
          <button>Sign Up</button>
        </motion.div>
      )}
    </header>
  );
};
export default Header;
// initial={{ opacity: 0, scale: 0.5 }}
// animate={{ opacity: 1, scale: 1 }}
// transition={{ duration: 0.5 }}