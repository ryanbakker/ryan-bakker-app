import Image from "next/image";
import AboutImg from "../public/about-img.webp";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <section
      className="section_blue flex about_section flex-col md:flex-row"
      id="about"
    >
      <div className="py-14 px-8 md:px-16">
        <h3 className="section_title">A Little About Me</h3>
        <p className="mobile_about max-w-2xl leading-7">
          I&apos;m a passionate developer with internship experience and two
          diplomas, now pursuing a bachelor&apos;s degree in Software
          Engineering. My foundation lies in WordPress and React development,
          and I&apos;m expanding my skillset with Next.js 13, TypeScript, and
          TailwindCSS. You can view my work on{" "}
          <Link
            className="inline_link"
            href="https://github.com/ryanbakkerNZ"
            target="_blank"
          >
            GitHub
          </Link>
          .
          <br />
          <br />I also bring experience in Agile and Scrum methodologies, gained
          during team projects in my diploma studies. I am eager to develop my
          skills through continuous learning and growth opportunities.
        </p>

        <p className="desktop_about max-w-2xl leading-7">
          I am a developer with internship experience and a passion for website
          and app development. With two diplomas in the bank, I will embark on
          my next venture, pursuing a bachelors degree in Software Engineering
          starting in July.
          <br />
          <br />I have a strong WordPress and React development foundation and
          gained experience in Adobe, Figma, and Github. Currently, I am focused
          on expanding my skillset. Learning the new Next.js 13 framework,
          paired with TypeScript and TailwindCSS. You can find examples of my
          work on my GitHub profile{" "}
          <Link
            className="inline_link"
            href="https://github.com/ryanbakkerNZ"
            target="_blank"
          >
            here
          </Link>
          .
          <br />
          <br />
          In addition to technical skills, I have experience working with Agile
          and Scrum methodologies, which I used during team projects in my
          diplomas. I am excited to continue expanding my skills through
          learning and development opportunities.
        </p>

        <SocialIcons />
      </div>

      <Image
        src={AboutImg}
        alt="Ryan Bakker under lights"
        className="mx-auto object-contain md:max-w-lg about_image"
      />
    </section>
  );
};

export default About;
