import React from 'react';

import styled from '@emotion/styled';
import { NextPage } from 'next';
import Seo from '@/src/components/Seo';

const DesktopInstallWay: NextPage = () => {
  return (
    <DesktopInstallSection>
      <Seo title="데스크탑 설치방법" />
      <DesktopInstallImg src="https://cdn.discordapp.com/attachments/1054718420651872266/1085173205104345168/669e5ee17b78c3b4.pngx" />
      <DesktopInstallGuide>
        오른쪽 위에 설치 아이콘을 누르고
        <br />
        설치를 누르시면 돼요!
      </DesktopInstallGuide>
    </DesktopInstallSection>
  );
};

export default DesktopInstallWay;
export const DesktopInstallSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const DesktopInstallImg = styled.img`
  width: 60%;
  height: 100%;

  margin: auto;
`;
export const DesktopInstallGuide = styled.div`
  width: 60%;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    font-weight: 600;
  }
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;
