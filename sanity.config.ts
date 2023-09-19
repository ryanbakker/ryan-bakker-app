import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "jc426dit",
  dataset: "production",
  title: "Ryan Bakker",
  apiVersion: "2023-03-04",
  basePath: "/content-studio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
