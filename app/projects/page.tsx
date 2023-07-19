import Link from "next/link";
import GoBack from "../../public/circle-arrow-down-solid.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <section>
        <div className="flex">
          <Link
            href="/"
            className="px-16 flex items-center justify-center gap-2 text-white/50 back_btn"
          >
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="back_btn_icon"
            />
            <p className="back_btn_text">Go Back</p>
          </Link>
        </div>

        <div className="px-16 pt-10 pb-10">
          <h1 className="section_title">Projects Page</h1>
          <p className="max-w-3xl leading-7">
            View a selection of my projects, a couple of which contributed to my
            diplomas. Most projects are built using Next.js, with the rest using
            WordPress or bare HTML code. Some projects contain links to GitHub
            repos or even the live build on Vercel. If you have any queries,
            feel free to get in touch using the contact section. Or view my
            GitHub profile{" "}
            <Link
              className="inline_link"
              href="https://github.com/ryanbakkerNZ"
              target="_blank"
            >
              here
            </Link>
            .
          </p>
        </div>

        <ProjectsGrid />
      </section>
    </main>
  );
}
