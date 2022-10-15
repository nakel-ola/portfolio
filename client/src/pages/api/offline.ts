import { About } from "./../../components/AboutCard";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Service } from "../../components/ServiesCard";
import { Skill } from "../../components/SkillsCard";
import data from "../../data/data.json";
import { Project } from "../../components/ProjectsCard";

export interface ProjectDefault {
  name: string;
  category: string[];
  description: string;
  tech: string[];
  images: string[];
  link: string;
}

export type ResponseData = {
  about: About;
  skills: Skill[];
  service: Service[];
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const newData = {
        ...data,
      projects: data.projects.map((project: ProjectDefault) => ({
        name: project.name,
        category: project.category,
        description: project.description,
        tech: [...project.tech.map((t: string) => data.skills.find((skill) => skill.name === t))], 
        images: project.images,
        link: project.link
      }))
    }
    res.status(200).json(newData);
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
