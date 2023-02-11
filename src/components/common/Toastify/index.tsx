import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';

export const Toastify = styled(ToastContainer)`
  @media screen and (min-width: 40rem) {
    width: 20rem;
  }
`;

type ToastifyType = {
  answer: boolean;
};
export const SnackBar: React.FC<ToastifyType> = ({ answer }) => {
  useEffect(() => {
    answer
      ? toast.success(`정답입니다!`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      : toast.error(`정답이 아닙니다!`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
  }, [answer]);

  return <Toastify />;
};
