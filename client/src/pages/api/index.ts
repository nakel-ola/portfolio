// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { AboutResponse, ProjectResponse, ServiceResponse, SkillResponse } from "../../../typing";
import { sanityClient } from "../../sanity";



const query = groq`
    {
        "about": *[_type == "about"][0],
        "skills": *[_type == "skills"],
        "services": *[_type == "services"],
        "projects": *[_type == "projects"] {
            ...,
            tech[]->{
            ...
            }
        }
    }
`;

export type ResponseData = {
  about: AboutResponse;
  skills: SkillResponse[];
  services: ServiceResponse[];
  projects: ProjectResponse[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const data: ResponseData = await sanityClient.fetch(query);
    console.log(data)
    res.status(200).json(data);
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
