import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';

export const Toastify = styled(ToastContainer)`
  @media screen and (min-width: 40rem) {
    width: 27rem;
  }
`;

type ToastifyType = {
  answer: boolean;
  seconds: number;
};
/**
 * 몇초만에 풀었는지 알려줌
 * 처음에 false를 받기 때문에 false일 때는 아무것도 안띄우고
 * true가 되었을 때 초를 리턴함.
 *
 *
 */
export const SnackBar: React.FC<ToastifyType> = ({ answer, seconds }) => {
  useEffect(() => {
    answer === true ? (
      toast.success(`${seconds}초 걸렸어요!`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      })
    ) : (
      <></>
    );
  }, [answer]);

  return <Toastify />;
};
