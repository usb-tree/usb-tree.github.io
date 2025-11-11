import { readFileSync } from "fs";
import { join } from "path";
import yaml from "js-yaml";

const fileContents = readFileSync(
  join(process.cwd(), "components", "Contact", "skills.yaml"),
  "utf8",
);

const data = yaml.load(fileContents) as { skills: string[] };

export const skillsData: string[] = data.skills;
