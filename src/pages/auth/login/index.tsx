import { AuthBottom } from '@/src/components/Auth/Bottom';
import { Login } from '@/src/components/Auth/Login/Form';
import { LoginInput } from '@/src/components/Auth/Login/InputForm';
import React, { useState } from 'react';

import * as S from './styled';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS, auth } from '@/src/firebase';
import { ErrorMessage } from '../register/styled';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalAtom';
import ResetPassword from '@/src/components/Modal/ResetPassword';

const LoginPage: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [userEmail, setUserEmail] = useState('');
  const [userPw, setUserPw] = useState('');
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [formError, setFormError] = useState('');

  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      view: 'default',
      open: false,
    }));

  const [signInWithEmailAndPassword, user, loading, userError] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  const OnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError) setFormError('');
    signInWithEmailAndPassword(userEmail, userPw);
  };

  //toggle
  const toggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };
  if (user) {
    router.push('/');
  }
  console.log(userError?.message);
  return (
    <S.LoginBackground>
      <S.Center>
        <Login username={'asd'} status={false} />
        <S.LoginForm onSubmit={OnSubmit}>
          <S.LoginPosition>
            <LoginInput
              placeholder="이메일"
              name="email"
              type="email"
              setData={setUserEmail}
            />
            <LoginInput
              placeholder="비밀번호"
              name="password"
              type="password"
              setData={setUserPw}
            />
          </S.LoginPosition>
          <ErrorMessage>
            {formError ||
              FIREBASE_ERRORS[
                userError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </ErrorMessage>
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.LoginForm>
        <AuthBottom
          AuthLink={'/auth/register'}
          YouHave={'계정이 없으신가요?'}
          StyledMarinLeft={4}
        />
        비밀번호를 잊어버리셨나요?
        <S.LostPw
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'resetPassword',
            }))
          }
        >
          비밀빈호 초기화
        </S.LostPw>
        {modalState.view === 'resetPassword' ? (
          <ResetPassword handleClose={handleClose} toggleView={toggleView} />
        ) : (
          <></>
        )}
      </S.Center>
    </S.LoginBackground>
  );
};

export default LoginPage;
