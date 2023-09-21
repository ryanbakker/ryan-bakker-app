import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section className="section_padding" id="showcase">
      <h3 className="section_title">Some Of My Work</h3>

      <p className="max-w-4xl leading-7">
        Check out a selection of some of my website and app projects I have
        done. Some are solo projects including during my diplomas, and others
        are group projects. You can find links on the project pages.
      </p>

      <div className="project_section_list">
        {projects.slice(0, 3).map((project) => (
          <Link key={project._id} href={`/projects/${project.slug}`}>
            <div className="project_section_list_item ml-auto mr-auto">
              <div className="project_section_list_item_img">
                <Image
                  src={project.images[0].imageUrl}
                  alt={project.images[0].alt}
                  width={400}
                  height={400}
                  className="object-cover"
                  quality={40}
                />
              </div>

              <h4>{project.title}</h4>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-16">
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
}
