import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import TypedJS from 'typed.js';

const Typed = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  smartBackspace = true,
  className,
}) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      smartBackspace,
    };

    typed.current = new TypedJS(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <Container className={className}>
      <Span ref={el} />
    </Container>
  );
};

const Container = styled.div``;

const Span = styled.span`
  whitespace: pre;
`;

export default Typed;
