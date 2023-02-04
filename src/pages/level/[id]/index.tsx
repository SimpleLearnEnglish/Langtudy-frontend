import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './styled';

const LevelPage: React.FC = () => {
  const Empty = '';

  //데이터 패칭해서 컴포넌트로 api 정보를 보냄
  const router = useRouter();
  const id = router.query.id;

  return (
    <S.LevelPageContainer>
      <S.LevelTextContainer>
        난이도: {id === 'easy' ? <>쉬움</> : <></>}
        {id === 'normal' ? <>보통</> : <></>}
        {id === 'hard' ? <>어려움</> : <></>}
      </S.LevelTextContainer>
      <Level
        LevelType={id as any}
        easy={<Easy />}
        normal={<Normal />}
        hard={<Hard />}
      />
    </S.LevelPageContainer>
  );
};

export default LevelPage;
