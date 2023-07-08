import Link from "next/link";
import GoBack from "../../public/circle-arrow-down-solid.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

function page() {
  return (
    <section>
      <div className="flex">
        <Link
          href="/"
          className="px-16 flex items-center justify-center gap-2 text-white/50 back_btn"
        >
          <i className="fa-solid fa-circle-arrow-left"></i>
          <p className="back_btn_text">Go Back</p>
        </Link>
      </div>

      <div className="px-16 pt-10 pb-20">
        <h1 className="section_title">Projects Page</h1>
        <p className="max-w-4xl leading-7">
          Here is a selection of some of my work. A couple of which were project
          work while I was completing my diplomas. Most were created using
          React.js, with the rest using WordPress or bare HTML code. Some of the
          project pages have links to the GitHub repo containing code when
          available, the documentation and the proposal for the project. If you
          have any queries feel free to get in touch using the contact section.
        </p>
      </div>
    </section>
  );
}

export default page;
