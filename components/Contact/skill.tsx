import React from "react";

interface SkillBoxProps {
  word: string;
  color?: string;
}

export const SkillBox: React.FC<SkillBoxProps> = ({ word }) => {
  return (
    <span className="skill text-body mr-2 mb-2 inline-block rounded-md px-3 py-1 text-sm font-medium">
      {word}
    </span>
  );
};

export default SkillBox;
