import React from "react";
import Button from "./Button";
import ButtonIcon from "../public/file-solid.svg";

const ResumeSection = () => {
  return (
    <section className="section_padding resume_section" id="resume-section">
      <h3 className="section_title">Check Out My Resume</h3>
      <a href="/ryan-bakker-resume.pdf" target="_blank" rel="nofollow">
        <Button title="Go To Resume" style="solid" rightIcon={ButtonIcon} />
      </a>
    </section>
  );
};

export default ResumeSection;
