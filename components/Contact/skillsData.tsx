import { readFileSync } from "fs";
import { join } from "path";
import yaml from "js-yaml";

export type Skill = {
  word: string;
  color?: string;
};

const fileContents = readFileSync(
  join(process.cwd(), "components", "Contact", "skills.yaml"),
  "utf8",
);

const data = yaml.load(fileContents) as { skills: (string | Skill)[] };

// Convert strings to Skill objects
export const skillsData: Skill[] = data.skills.map((skill) =>
  typeof skill === "string" ? { word: skill } : skill,
);
