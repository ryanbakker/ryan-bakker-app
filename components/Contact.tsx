"use client";

import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Contact = () => {
  return (
    <section
      className="section_blue section_padding flex flex-col md:flex-row"
      id="contact"
    >
      <div className="mt-6">
        <h3 className="section_title">Get In Touch</h3>
        <p className="max-w-2xl leading-7">
          I am interested in freelance web development opportunities. If you
          have any queries, feel free to use the contact form or send me a
          direct email below. Alternatively, you can go to my Fiverr page to
          submit an order for a website{" "}
          <Link
            className="inline_link"
            href="https://www.fiverr.com/s/xKoR9B"
            target="_blank"
          >
            here
          </Link>
          .
        </p>

        <SocialIcons />
      </div>
      <form className="contact_form mt-12 md:mt-0 md:mx-auto flex flex-col gap-4">
        <span>
          <input placeholder="name" />
        </span>

        <span>
          <input placeholder="email" />
        </span>

        <span>
          <input placeholder="phone" />
        </span>

        <span>
          <textarea className="resize-none h-40" placeholder="message" />
        </span>

        <div className="block relative">
          <div className="contact_button_wrapper">
            <button className="contact_button">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
