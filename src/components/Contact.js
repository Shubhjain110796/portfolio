import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Let’s connect and create something amazing together 🚀
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <Mail className="contact-icon" />
          <a href="mailto:shubhamjain110796@gmail.com">
            shubhamjain110796@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <Phone className="contact-icon" />
          <a href="tel:+919623204106">+91 96232 04106</a>
        </div>
        <div className="contact-item">
          <MapPin className="contact-icon" />
          <span>Nashik, India</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
