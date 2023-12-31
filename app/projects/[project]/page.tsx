import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <main className="project_single px-8 md:pl-16">
      <Link
        href="/projects"
        className="mr-auto mb-8 flex items-center justify-center gap-2 text-white/50 back_btn"
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} className="back_btn_icon" />
        <p className="back_btn_text">Go Back</p>
      </Link>

      <section className="project_single_banner">
        <h1 className="text-[#1d1d1d] dark:text-white">{project.title}</h1>
        <h2 className="text-[#1d1d1d] dark:text-white">
          Completed {project.date}
        </h2>
      </section>

      <section className="project_single_content">
        <div className="project_single_images">
          {project.images[0].imageUrl ? (
            <Image
              src={project.images[0].imageUrl}
              alt={project.images[0].alt}
              width={500}
              height={400}
              className="object-cover"
            />
          ) : null}
          {project.images[1].imageUrl ? (
            <Image
              src={project.images[1].imageUrl}
              alt={project.images[1].alt}
              width={500}
              height={400}
              className="object-cover"
            />
          ) : null}
          {project.images.length >= 3 && project.images[2].imageUrl ? (
            <Image
              src={project.images[2].imageUrl}
              alt={project.images[2].alt}
              width={500}
              height={400}
              className="object-cover"
            />
          ) : null}
          {project.images.length >= 4 && project.images[3].imageUrl ? (
            <Image
              src={project.images[3].imageUrl}
              alt={project.images[3].alt}
              width={500}
              height={400}
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="project_single_text flex-1 flex flex-col gap-8">
          <div className="project_single_text_github">
            <h3>GitHub</h3>
            <a
              href={project.github}
              target="_blank"
              className="project_external_link"
            >
              Go To Repository
            </a>
          </div>

          <div style={{ display: project.livebuild ? "block" : "none" }}>
            <h3>Live Build</h3>
            <a
              href={project.livebuild}
              target="_blank"
              className="project_external_link"
            >
              Go To Build
            </a>
          </div>

          <div className="project_single_text_client">
            <h3>Client Overview</h3>
            <PortableText value={project.clientoverview} />
          </div>

          <div className="project_single_text_project">
            <h3>Project Overview</h3>
            <PortableText value={project.projectoverview} />
          </div>

          <div className="project_single_text_tools">
            <h3>Tools Used</h3>
            <PortableText value={project.tools} />
          </div>
        </div>
      </section>
    </main>
  );
}
