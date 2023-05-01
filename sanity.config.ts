import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "v2mlhd9i",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-04-29",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default  config