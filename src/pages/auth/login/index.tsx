import { AuthBottom } from '@/src/components/Auth/Bottom';
import { Login } from '@/src/components/Auth/Login/Form';
import { LoginInput } from '@/src/components/Auth/Login/InputForm';
import React, { useState } from 'react';

import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS, auth } from '@/src/firebase';
import { ErrorMessage } from '../register/index';
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
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (user) {
    router.push('/');
  }
  return (
    <LoginBackground>
      <Center>
        <Login username={'asd'} status={false} />
        <LoginForm onSubmit={OnSubmit}>
          <LoginPosition>
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
          </LoginPosition>
          <ErrorMessage>
            {formError ||
              FIREBASE_ERRORS[
                userError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </ErrorMessage>
          <LoginButton type="submit">로그인</LoginButton>
        </LoginForm>
        <AuthBottom StyledMarinLeft={4} />
        <OneLineFlex>
          <OtherOptionText href={'/auth/register'}>
            계정이 없으신가요?
          </OtherOptionText>
          <LostPw
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: 'resetPassword',
              }))
            }
          >
            비밀빈호 초기화
          </LostPw>
        </OneLineFlex>
        <PushMargin>
          <SocialButton
            SocialName="구글로 로그인"
            ImgSrc="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
            Width={2.7}
            Height={2.7}
            SignGoogle={signInWithGoogle}
          />
        </PushMargin>
        {modalState.view === 'resetPassword' ? (
          <ResetPassword handleClose={handleClose} />
        ) : (
          <></>
        )}
      </Center>
    </LoginBackground>
  );
};
import styled from '@emotion/styled';
import Link from 'next/link';
export const LoginBackground = styled.div`
  background-color: #fff;
  position: fixed;
  width: 60%;
  height: 100%;
  left: 40%;
  @media screen and (max-width: 768px) {
    left: 0%;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }

  margin-left: 10rem;
`;

export const LoginButton = styled.button`
  width: 34.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(153, 255, 116, 0.4);

  :hover {
    background-color: rgba(153, 255, 116, 0.6);
  }
  border-radius: 0.6rem;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3.5rem;
  margin-left: 4rem;
`;
export const LoginForm = styled.form``;

export const LoginPosition = styled.div`
  margin-top: 6.5rem;
`;

export const LostPw = styled.button`
  border: none;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 5.5rem;
  user-select: none;
  background-color: #ffffff;
  :hover {
    font-weight: 600;
  }
`;

export const PushMargin = styled.div`
  margin-left: 4rem;
`;

export const OneLineFlex = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const OtherOptionText = styled(Link)`
  width: 14rem;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 6rem;
  text-decoration: none;
  user-select: none;
  color: rgba(0, 0, 0, 0.65);
  :hover {
    font-weight: 600;
  }
`;

export default LoginPage;
