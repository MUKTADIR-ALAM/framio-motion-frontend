
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact US</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/Framiomotion" target="_blank">
          <FaFacebookSquare size={30} />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=8801303785243&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsappSquare size={30} />
          </a>

          <a
            href="https://youtube.com/@framiomotion?si=4iT62vTHSN4-qSIp"
            target="_blank"
          >
            <IoLogoYoutube size={30} />
          </a>
        </div>

        <div className="mt-5 space-y-4">
          <p>Email: Framiomotion@gmail.com</p>
          <p>Phone: +8801303785243</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </nav>
    </footer>
  );
}