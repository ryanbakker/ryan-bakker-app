import React from "react";
import Button from "./Button";
import Image from "next/image";
import RetailerImg from "../public/retailer-current-listing.png";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section className="section_padding" id="showcase">
      <h3 className="section_title">Some Of My Work</h3>

      <p className="max-w-4xl leading-7">
        Check out a selection of some of my website and app projects I have
        done. Some are solo projects including during my diplomas, and others
        are group projects. You can find links on the project pages.
      </p>

      <div className="project_section_list">
        {/* Item One */}
        <div className="project_section_list_item">
          <div className="project_section_list_item_img">
            <Image src={RetailerImg} alt="Retailer" />
          </div>

          <h5>Retailer</h5>
        </div>

        {/* Item One */}
        <div className="project_section_list_item">
          <div className="project_section_list_item_img">
            <Image src={RetailerImg} alt="Retailer" />
          </div>

          <h5>Retailer</h5>
        </div>

        {/* Item One */}
        <div className="project_section_list_item">
          <div className="project_section_list_item_img">
            <Image src={RetailerImg} alt="Retailer" />
          </div>

          <h5>Retailer</h5>
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-16">
        <Link href="/projects">
          <Button title="View Projects" style="solid" />
        </Link>
        <Link
          href="https://github.com/ryanbakkerNZ?tab=repositories"
          target="_blank"
        >
          <Button title="Go To GitHub" style="outlined" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
