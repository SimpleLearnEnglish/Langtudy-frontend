import Level from '@/src/components/Template/Level';
import { Easy, Normal, Hard } from 'src/components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import * as S from './styled';
import { getEng } from '@/src/api';

const LevelPage: React.FC = () => {
  //데이터 패칭해서 컴포넌트로 api 정보를 보냄
  const [data, setData] = useState({
    data: '',
    data1: '',
    data2: '',
  });
  const router = useRouter();
  const id = router.query.id;
  console.log(getEng().then((res) => res.easy[0].word));
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
