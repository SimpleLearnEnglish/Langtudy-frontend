import React from 'react';
import * as S from './styled';

export interface LoginInputType {
  setData: any;
  name: string;
  type: string;
  placeholder: string;
}

export const LoginInput: React.FC<LoginInputType> = ({
  setData,
  name,
  type,
  placeholder,
}) => {
  return (
    <>
      <S.AuthContainer>
        <S.AuthInput
          required
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={(event: any) => {
            setData(event.target.value);
          }}
        />
      </S.AuthContainer>
    </>
  );
};
