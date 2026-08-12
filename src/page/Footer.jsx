import React from 'react';
import styled from 'styled-components';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';
import { BsFileEarmarkPerson } from 'react-icons/bs';

import IconLink from '../components/IconLink';

const ICON_SIZE = 25;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <Caption>Find me on:</Caption>
      <Links>
        <SocialLink
          href='https://github.com/kulothunganug'
          $hoverColor='#181717'
          IconComponent={<SiGithub size={ICON_SIZE} />}
          aria-label='Github'
        />
        <SocialLink
          href='mailto:kulothunganug@gmail.com'
          $hoverColor='#EA4335'
          IconComponent={<SiGmail size={ICON_SIZE} />}
          aria-label='Mail'
        />
        <SocialLink
          href='https://www.linkedin.com/in/kulothunganug'
          $hoverColor='#0A66C2'
          IconComponent={<SiLinkedin size={ICON_SIZE} />}
          aria-label='LinkedIn'
        />
      </Links>
    </SocialContainer>
    <ResumeButton
      href='https://rxresu.me/kulothunganug/resume'
      target='_blank'
      rel='noopener noreferrer'
    >
      <BsFileEarmarkPerson size={20} />
      Resume
    </ResumeButton>
  </FooterContainer>
);

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const SocialContainer = styled.div``;

const Caption = styled.p`
  margin-bottom: 10px;
`;

const SocialLink = styled(IconLink)`
  margin-right: 7px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Dosis', sans-serif;
  color: ${p => p.theme.textColor};
  background-color: transparent;
  border: 2px solid ${p => p.theme.textColor};
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease-in;
  z-index: 100;

  &:hover {
    color: white;
    background-color: ${p => p.theme.primaryColor};
    border-color: ${p => p.theme.primaryColor};
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export default Footer;
