import React from "react";

interface SkillBoxProps {
  word: string;
  color?: string;
}

export const SkillBox: React.FC<SkillBoxProps> = ({ word }) => {
  return (
    <span className="mr-2 mb-2 inline-block rounded-md bg-blue-700 px-3 py-1 text-sm font-medium text-white">
      {word}
    </span>
  );
};

export default SkillBox;
