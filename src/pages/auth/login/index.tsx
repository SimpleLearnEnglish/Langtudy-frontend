import { AuthBottom } from '@/src/components/Auth/Bottom';
import { Login } from '@/src/components/Auth/Login/Form';
import { LoginInput } from '@/src/components/Auth/Login/InputForm';
import React, { useState } from 'react';

import * as S from './styled';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS, auth } from '@/src/firebase';
import { ErrorMessage } from '../register/styled';
import { useRouter } from 'next/router';

//modal
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalAtom';
import ResetPassword from '@/src/components/Modal/ResetPassword';

import { SocialButton } from '@/src/components/Auth';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
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

  const [signInWithEmailAndPassword, _, loading, userError] =
    useSignInWithEmailAndPassword(auth);
  const [user, error] = useAuthState(auth);
  const router = useRouter();
  const OnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError) setFormError('');
    signInWithEmailAndPassword(userEmail, userPw);
  };

  if (user) {
    router.push('/');
  }
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
        <AuthBottom StyledMarinLeft={4} />
        <S.OneLineFlex>
          <S.OtherOptionText href={'/auth/register'}>
            계정이 없으신가요?
          </S.OtherOptionText>
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
        </S.OneLineFlex>
        <S.PushMargin>
          <SocialButton
            SocialName="구글로 로그인"
            ImgSrc="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
            Width={2.7}
            Height={2.7}
          />
        </S.PushMargin>
        {modalState.view === 'resetPassword' ? (
          <ResetPassword handleClose={handleClose} />
        ) : (
          <></>
        )}
      </S.Center>
    </S.LoginBackground>
  );
};

export default LoginPage;
