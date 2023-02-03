import React from 'react';
import * as S from './styled';

export interface RegisterInputType {
  setData: any;
  name: string;
  type: string;
  placeholder: string;
}
export const RegisterInput: React.FC<RegisterInputType> = ({
  setData,
  name,
  type,
  placeholder,
}) => {
  return (
    <S.RegisterAuthContainer>
      <S.RegisterInput
        onChange={(event) => {
          setData(event.target.value);
        }}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </S.RegisterAuthContainer>
  );
};
