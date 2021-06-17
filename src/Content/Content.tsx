import React from 'react';
import styled from 'styled-components';
import { useViewContext } from '../_contexts/viewContext';

export const Content = () => {
  const { view } = useViewContext();
  return <Container>{view}</Container>;
};

const Container = styled.div`
  color: ${(props) => props.theme.text};
  height: 100%;
  a {
    color: ${(props) => props.theme.primaryButton};
  }
`;
