import { AuthBottom } from '@/src/components/Auth/Bottom';
import { Login } from '@/src/components/Auth/Login/Form';
import { LoginInput } from '@/src/components/Auth/Login/InputForm';
import React, { useState } from 'react';

import * as S from './styled';

const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  return (
    <S.LoginBackground>
      <S.Center>
        <Login username={'asd'} status={false} />
        <LoginInput Login={'asd'} setUserId={setUserId} setUserPw={setUserPw} />
        <AuthBottom
          AuthLink={'/auth/register'}
          YouHave={'계정이 없으신가요?'}
          StyledMarinLeft={4}
        />
      </S.Center>
    </S.LoginBackground>
  );
};

export default LoginPage;
