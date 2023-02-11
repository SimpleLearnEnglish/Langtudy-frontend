import React from 'react';

interface LevelTemplateProps {
  LevelType: 'easy' | 'normal' | 'hard';
  easy: React.ReactNode;
  normal: React.ReactNode;
  hard: React.ReactNode;
}

const Level: React.FC<LevelTemplateProps> = ({
  LevelType,
  easy,
  normal,
  hard,
}) => {
  return (
    <>
      {LevelType === 'easy' ? easy : <></>}
      {LevelType === 'normal' ? normal : <></>}
      {LevelType === 'hard' ? hard : <></>}
    </>
  );
};

export default Level;
