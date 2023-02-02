import React, { useState } from 'react';
import * as S from './styled';
import { Register, RegisterInput } from '@/src/components/Auth/Register';
import { AuthBottom } from '@/src/components/Auth/Bottom';

const RegisterPage: React.FC = () => {
  const [username, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userCheckPw, setUserCheckPw] = useState('');
  const registerData = {
    username: username,
    user_id: userId,
    user_pw: userPw,
    user_number: userNumber,
  };
  let check = '';
  if (userPw != userCheckPw) {
    check = '땡';
  } else if (userPw.length < 1) {
    check = '입력없음';
  } else if (userPw == userCheckPw) {
    check = '일치';
  }

  return (
    <S.RegisterBackground>
      <S.RegisteradAdjustment>
        <Register />
        <RegisterInput
          Register={'asd'}
          setUserName={setUserName}
          setUserId={setUserId}
          setUserPw={setUserPw}
          setUserNumber={setUserNumber}
          Check={check}
          setUserCheckPw={setUserCheckPw}
        />
        <AuthBottom
          AuthLink={'/auth/login'}
          YouHave={'로그인'}
          StyledMarinLeft={0}
        />
      </S.RegisteradAdjustment>
    </S.RegisterBackground>
  );
};

export default RegisterPage;
