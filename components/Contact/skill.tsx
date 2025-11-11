import React from "react";

interface SkillBoxProps {
  skill: string;
}

export const SkillBox: React.FC<SkillBoxProps> = ({ skill }) => {
  return (
    <span className="skill text-body mr-2 mb-2 inline-block rounded-md px-3 py-1 text-sm font-medium">
      {skill}
    </span>
  );
};

export default SkillBox;
