import React, { useState } from 'react';
import * as S from './styled';
import { Register, RegisterInput } from '@/src/components/Auth/Register';
import { AuthBottom } from '@/src/components/Auth/Bottom';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
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
  return (
    <S.RegisterBackground>
      <S.RegisteradAdjustment>
        <Register />
        <S.RegisterForm onSubmit={OnSubmit}>
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
          <S.ErrorMessage>
            {error ||
              //typecast 변수를 가져오고 새로운 유형으로 변경
              FIREBASE_ERRORS[
                userError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </S.ErrorMessage>
          <S.RegisterButton type="submit">가입</S.RegisterButton>
          <AuthBottom StyledMarinLeft={0} />
          <S.OtherOptionContainer>
            <S.OtherOptionText href={'/auth/login'}>
              로그인 하러 가기
            </S.OtherOptionText>
          </S.OtherOptionContainer>
        </S.RegisterForm>
        <SocialButton
          SocialName="구글로 회원가입"
          ImgSrc="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"
          Width={2.7}
          Height={2.7}
        />
      </S.RegisteradAdjustment>
    </S.RegisterBackground>
  );
};

export default RegisterPage;
