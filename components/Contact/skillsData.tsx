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

const data = yaml.load(fileContents) as { skills: Skill[] };

export const skillsData: Skill[] = data.skills;
