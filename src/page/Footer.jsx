import React from 'react';
import styled from 'styled-components';
import {
  SiInstagram,
  SiYoutube,
  SiGithub,
  SiGmail,
} from 'react-icons/si';

import IconLink from '../components/IconLink';

const ICON_SIZE = 25;

const Footer = () => (
  <Container>
    <Caption>Find me on:</Caption>
    <Links>
      <SocialLink
        href='https://github.com/kulothunganug'
        hoverColor='#181717'
        IconComponent={<SiGithub size={ICON_SIZE} />}
        aria-label='Github'
      />
      <SocialLink
        href='https://www.instagram.com/kulothunganug'
        hoverColor='#E4405F'
        IconComponent={<SiInstagram size={ICON_SIZE} />}
        aria-label='Instagram'
      />
      <SocialLink
        href='mailto:kulothunganug@gmail.com'
        hoverColor='#EA4335'
        IconComponent={<SiGmail size={ICON_SIZE} />}
        aria-label='Mail'
      />
      <SocialLink
        href='https://www.youtube.com/@kulothunganug'
        hoverColor='#FF0000'
        IconComponent={<SiYoutube size={ICON_SIZE} />}
        aria-label='Youtube'
      />
    </Links>
  </Container>
);

const Caption = styled.p`
  margin-bottom: 10px;
`;

const Container = styled.div`
  position: fixed;
  bottom: 30px;
`;

const SocialLink = styled(IconLink)`
  margin-right: 7px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Footer;
