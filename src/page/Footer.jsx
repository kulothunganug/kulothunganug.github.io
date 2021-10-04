import React from 'react';
import styled from 'styled-components';
import {
  Instagram,
  Discord,
  Youtube,
  Github,
  Gmail,
} from '@styled-icons/simple-icons';

import IconLink from '../components/IconLink';

const ICON_SIZE = 25;

const Footer = () => (
  <Container>
    <Caption>Find me on:</Caption>
    <Links>
      <IconLink
        href='https://discordapp.com/users/770868890737704979'
        hoverColor='#5865F2'
        IconComponent={<Discord size={ICON_SIZE} />}
      />
      <IconLink
        href='https://github.com/Kulothungan16'
        hoverColor='#181717'
        IconComponent={<Github size={ICON_SIZE} />}
      />
      <IconLink
        href='https://www.instagram.com/kuloth.__.ungan'
        hoverColor='#E4405F'
        IconComponent={<Instagram size={ICON_SIZE} />}
      />
      <IconLink
        href='mailto:kulothunganug@gmail.com'
        hoverColor='#EA4335'
        IconComponent={<Gmail size={ICON_SIZE} />}
      />
      <IconLink
        href='https://www.youtube.com/channel/UCPFVA4ruEe3QOtTfxEGpqrg'
        hoverColor='#FF0000'
        IconComponent={<Youtube size={ICON_SIZE} />}
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

const IconLink = styled(IconLink)`
  margin-right: 7px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Footer;
