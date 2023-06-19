import React, { useRef, useState } from "react";
import Map from "./Map";
import mailIco from "../Assets/img/mailIco.png";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";

export default function Contact() {
  const form = useRef();
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ltf84c",
        "template_8bldw8f",
        form.current,
        "DvNi9KElrv01muMEx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };
  return (
    <Box component="div" className="section-contact" id="contact">
      <Box component="div" className="contact-container">
        <Box component="div" className="left-container">
          <form onSubmit={handleSubmit} ref={form}>
            <h1>Contact me:</h1>
            <input type="text" placeholder="Your name" name="name" required />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              placeholder="Type your message"
              rows={10}
              name="message"
            />
            <button type="submit" value="Send">
              Send
            </button>
            <span>
              {sucess
                ? "Your message has been sent! I'll get back to you soon!"
                : ""}{" "}
            </span>
            <span>{error ? "Something went wrong :(" : ""} </span>
          </form>
          <Box component="div" className="contact">
            <span>
              <img src={mailIco} /> Or text me at:
            </span>
            <a
              href="mailto:przemyslaw.przebieda@gmal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              io4.shekhar@gmail.com
            </a>
          </Box>
        </Box>

        <div className="right-container">
          <Map />
        </div>
      </Box>
    </Box>
  );
}
