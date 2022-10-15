import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data = JSON.parse(req.body);

    const mutations = {
      mutations: [
        {
          create: {
            _type: "contact",
            name: data.name,
            email: data.email,
            message: data.message,
          },
        },
      ],
    };

    const apiEndpoint = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2022-08-20/data/mutate/${process.env.SANITY_DATASET}`;

    
    const result = await fetch(apiEndpoint, {
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.SANITY_TOKEN}`
        },
        body: JSON.stringify(mutations),
        method: "POST",
    })
    
    const json = await result.json();
    console.log(json)

    res.status(200).json({ message: "Added!" });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
