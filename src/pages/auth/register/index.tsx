import React, { useState } from 'react';
import { Register, RegisterInput } from '@/src/components/Auth/Register';
import { AuthBottom } from '@/src/components/Auth/Bottom';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase';
import { FIREBASE_ERRORS } from '@/src/firebase';
import { SocialButton } from '@/src/components/Auth';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  //use

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();
  //Firebase Logic
  const OnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError('');
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않아요🤔');
      return;
    }
    //passwords match
    createUserWithEmailAndPassword(email, password);
    router.push('/');
  };
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  return (
    <RegisterBackground>
      <RegisterAdjustment>
        <Register />
        <RegisterForm onSubmit={OnSubmit}>
          <RegisterInput
            setData={setEmail}
            name={'email'}
            type={'email'}
            placeholder={'이메일'}
          />{' '}
          <RegisterInput
            setData={setPassword}
            name="password"
            type="password"
            placeholder="비밀번호"
          />{' '}
          <RegisterInput
            setData={setConfirmPassword}
            name="Confirm Password"
            type="password"
            placeholder="비밀번호 확인"
          />
          <ErrorMessage>
            {error ||
              //typecast 변수를 가져오고 새로운 유형으로 변경
              FIREBASE_ERRORS[
                userError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </ErrorMessage>
          <RegisterButton type="submit">가입</RegisterButton>
          <AuthBottom StyledMarinLeft={0} />
          <OtherOptionContainer>
            <OtherOptionText href={'/auth/login'}>
              로그인 하러 가기
            </OtherOptionText>
          </OtherOptionContainer>
        </RegisterForm>
        <SocialButton
          pathUrl=""
          SocialName="구글로 회원가입"
          ImgSrc="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
          Width={2.7}
          Height={2.7}
          SignGoogle={signInWithGoogle}
        />
      </RegisterAdjustment>
    </RegisterBackground>
  );
};

export default RegisterPage;

import styled from '@emotion/styled';
import Link from 'next/link';

export const RegisterBackground = styled.div`
  background-color: #fff;
  position: fixed;
  flex-direction: column;
  width: 60%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const RegisterAdjustment = styled.div`
  margin-left: 20vw;
  margin-top: 10vw;
  @media screen and (max-width: 900px) {
    margin: auto;
  }
  @media screen and (min-width: 1500px) {
    margin-left: 35vw;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 30vw;
  }
`;

export const RegisterButton = styled.button`
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
`;
export const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: #ff5656;
  font-size: 1.5rem;
`;
export const RegisterForm = styled.form``;

export const OtherOptionContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const OtherOptionText = styled(Link)`
  width: 11rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 2.7rem;
  user-select: none;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    margin: 0 0 0 2rem;
  }
  :hover {
    font-weight: 600;
  }
`;
