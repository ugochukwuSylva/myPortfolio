import "./Footer.scss";

import { MdCall } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="Contact">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="footer-contact"
      >
        <div className="footer-heading">
          <h3>Contact me</h3>
          <IoMdContact />
        </div>
        <span className="contact-icon--container">
          <p>
            <a href="tel:+2347030753192">
              <MdCall /> +234 703 0753 192
            </a>
          </p>
          <p>
            <a href="mailto: sylvaspecial@gmail.com">
              <MdMarkEmailRead /> sylvaspecial@gmail.com
            </a>
          </p>
        </span>
      </motion.div>

      <motion.div
        className="footer-socials"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-heading">
          <h3>Socials</h3>
          <MdGroup />
        </div>
        <span className="social-icons--container">
          <a
            href="https://github.com/ugochukwuSylva"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ugochuk11369335"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/ugochukwu-nwaba-aat-aca-931b7a188"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </span>
      </motion.div>

      <div className="footer-copyright">
        <em> &copy; All rights reserved by Nwaba Ugochukwu {year} </em>
      </div>
    </footer>
  );
}

export default Footer;
