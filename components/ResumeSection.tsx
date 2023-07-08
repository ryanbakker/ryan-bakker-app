import React from "react";
import Button from "./Button";
import ButtonIcon from "../public/circle-arrow-down-solid.svg";

const ResumeSection = () => {
  return (
    <section className="section_padding resume_section" id="resume-section">
      <h3 className="section_title">Check Out My Resume</h3>
      <Button title="Go To Resume" style="solid" rightIcon={ButtonIcon} />
    </section>
  );
};

export default ResumeSection;
