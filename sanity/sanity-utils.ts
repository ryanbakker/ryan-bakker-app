import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        description,
        date,
        github,
        livebuild,
        clientoverview,
        projectoverview,
        tools,
        images[] {
        alt,
        "imageUrl": asset->url,
      }

    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            description,
            date,
            github,
            livebuild,
            clientoverview,
            projectoverview,
            tools,
            images[] {
            alt,
            "imageUrl": asset->url,
          }
    
        }`,
    { slug }
  );
}
