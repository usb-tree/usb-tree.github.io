import React from "react";

interface SkillBoxProps {
  word: string;
  color?: string;
}

export const SkillBox: React.FC<SkillBoxProps> = ({ word }) => {
  return (
    <span className="mr-2 mb-2 inline-block rounded-md bg-gray-400 px-3 py-1 text-sm font-medium text-black">
      {word}
    </span>
  );
};

export default SkillBox;
