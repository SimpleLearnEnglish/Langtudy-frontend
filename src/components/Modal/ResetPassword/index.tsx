import React, { useEffect, useState } from 'react';
import { ModalView, authModalState } from '../../../atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS, auth } from '@/src/firebase';

type ResetPasswordProps = {
  toggleView: (view: ModalView) => void;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({ toggleView }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [sendPasswordResetEmail, sending, userError] =
    useSendPasswordResetEmail(auth);
  const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError('');
    if (email.includes('@')) {
      return setError('가입되지 않은 이메일이에요.');
    }
    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <div>이메일을 확인해주세요</div>
      ) : (
        <>
          {error ||
            //typecast 변수를 가져오고 새로운 유형으로 변경
            FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
          <div>이메일을 입력해주세요.</div>
          <form onSubmit={OnSubmit}>
            <input
              required
              name="email"
              placeholder="이메일"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <div>{userError?.message}</div>
            <button type="submit">비밀번호 초기화</button>
          </form>
        </>
      )}
    </>
  );
};

export default ResetPassword;
