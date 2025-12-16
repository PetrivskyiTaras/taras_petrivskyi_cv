export type ExperienceData = {
  id: string;
  position: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  projectName: string;
  linkToProject?: string;
  responsibilities: string;
  technologies: string;
  tools: string;
};

export type EducationData = {
  id: string;
  placeName: string;
  degree: string;
  date: string;
};

export type SkillData = {
  id: string;
  category: string;
  skill: string;
};

export type LanguagesData = {
  id: string;
  name: string;
  level: string;
};

export type PersonalInfo = {
  email: string;
  phone: string;
};
