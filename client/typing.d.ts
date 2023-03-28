export type sanityDefaultProps = {
  // _createdAt: string;
  // _id: string;
  // _rev: string;
  // _type: string;
  // _updatedAt: string;
};

export interface AboutResponse extends sanityDefaultProps {
  bio: string;
  image: string;
  name: string;
  tel: string;
  address: string;
  email: string;
  resume: any;
}


export interface SkillResponse extends sanityDefaultProps {
  name: string;
  image: string;
  color: string;
  percentage: number;
}

export interface ServiceResponse extends sanityDefaultProps {
  title: string;
  image: string;
  description: string;
}

export interface ProjectResponse extends sanityDefaultProps {
  name: string;
  category: string[];
  description: string;
  tech: SkillResponse[];
  images: string[];
  link: string;
  github: string;
}