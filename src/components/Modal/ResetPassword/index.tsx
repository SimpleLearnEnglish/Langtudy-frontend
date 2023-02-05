import React, { useEffect, useState } from 'react';
import { ModalView, authModalState } from '../../../atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS, auth } from '@/src/firebase';
import * as S from './styled';
import { ErrorMessage } from '@/src/pages/auth/register/styled';

type ResetPasswordProps = {
  toggleView: (view: ModalView) => void;
  handleClose: any;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({
  toggleView,
  handleClose,
}) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [sendPasswordResetEmail, sending, userError] =
    useSendPasswordResetEmail(auth);
  const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) {
      setError('');
    }
    setSuccess(await sendPasswordResetEmail(email));
  };

  return (
    <>
      <S.ResetPwWarp>
        <S.ResetPw>
          {success ? (
            <div>이메일을 확인해주세요</div>
          ) : (
            <>
              <S.InputEmailText>이메일을 입력해주세요.</S.InputEmailText>
              <S.ResetPwForm onSubmit={OnSubmit}>
                <S.EnterEmail
                  required
                  name="email"
                  placeholder="이메일"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <ErrorMessage>
                  {error ||
                    //typecast 변수를 가져오고 새로운 유형으로 변경
                    FIREBASE_ERRORS[
                      userError?.message as keyof typeof FIREBASE_ERRORS
                    ]}
                </ErrorMessage>
                <S.SubmitButton type="submit">비밀번호 초기화</S.SubmitButton>
              </S.ResetPwForm>
              <S.HandleCloseButton onClick={handleClose}>x</S.HandleCloseButton>
            </>
          )}
        </S.ResetPw>
      </S.ResetPwWarp>
    </>
  );
};

export default ResetPassword;
