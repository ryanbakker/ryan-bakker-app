import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import styles from "./ProjectsGrid.module.css";

export default async function ProjectsGrid() {
  const projects = await getProjects();
  return (
    <div className="px-8 md:px-16 pt-2 pb-20 projects_page_list">
      {projects.map((project) => (
        <Link key={project._id} href={`/projects/${project.slug}`}>
          <div
            className={`bg-[#a6bed4] hover:bg-[#7e93a8] dark:bg-[#171717] dark:hover:bg-[#0d0d0d] ${styles.projects_list_item}`}
          >
            <div className={styles.projects_list_item_img}>
              <Image
                src={project.images[0].imageUrl}
                alt={project.images[0].alt}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>

            <h5 className="text-[#1d1d1d] dark:text-white">{project.title}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
}
