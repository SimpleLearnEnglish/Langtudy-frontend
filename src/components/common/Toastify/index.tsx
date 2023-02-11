import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';

export const Toastify = styled(ToastContainer)`
  @media screen and (min-width: 40rem) {
    width: 20rem;
  }
`;

export const SnackBar: React.FC = () => {
  return <Toastify />;
};
