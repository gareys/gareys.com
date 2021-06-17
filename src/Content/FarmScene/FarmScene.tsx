import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useViewContext } from '../../_contexts/viewContext';

type Props = {
  previousContent: JSX.Element | null;
};

const FarmScene = ({ previousContent }: Props) => {
  const { setView } = useViewContext();
  return (
    <ContentContainer>
      <GlobalStyle />
      <Sun
        onClick={() => {
          setView(previousContent);
        }}
      >
        <span className="icon">&#9728;</span>
      </Sun>
      <Cloud size="sm" duration="20s">
        &#9729;
      </Cloud>
      <Cloud size="md" duration="15s" delay="2s" zIndex="0">
        &#9729;
      </Cloud>
      <Cloud size="lg" duration="25s" delay="3s">
        &#9729;
      </Cloud>
      <Cloud size="sm" duration="30s" delay="5s" zIndex="0" top="300px">
        &#9729;
      </Cloud>
      <Grass />
      <Pig>🐖</Pig>
      <Cow>🐄</Cow>
    </ContentContainer>
  );
};

FarmScene.displayName = 'FarmScene';

export { FarmScene };

const Sun = styled.h1`
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 300px;
  line-height: 300px;
  align-self: top;
  animation-name: sunshine;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  z-index: 1;
  /* shorthand */
  /* animation: sunshine 3s ease-in-out infinite alternate; */
  .icon {
    position: relative;
    top: 7px;
  }

  &:after {
    transform-origin: center;
  }

  @keyframes sunshine {
    from {
      color: palegoldenrod;
    }

    to {
      transform: rotate(270deg);
      color: gold;
    }
  }
`;

const cloudSizes = {
  sm: '100px',
  md: '200px',
  lg: '300px',
};

const Cloud = styled.div<{
  size: keyof typeof cloudSizes;
  duration: string;
  delay?: string;
  zIndex?: string;
  top?: string;
}>`
  position: absolute;
  color: white;
  font-size: ${(props) => cloudSizes[props.size]};
  left: ${(props) => `-${cloudSizes[props.size]}`};
  animation: ${(props) =>
    `float ${props.duration} linear infinite ${props.delay || ''}`};
  top: ${(props) => (props.top ? props.top : 'inherit')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : '2')};

  @keyframes float {
    50% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }
`;

const Grass = styled.div`
  position: absolute;
  bottom: -250px;
  background-color: green;
  height: 500px;
  width: 100%;
  transform: scaleX(2);
  border-radius: 50%;
  z-index: 3;
`;

const Pig = styled.div`
  position: absolute;
  left: 60%;
  bottom: 200px;
  font-size: 100px;
  transform: rotate(6deg);
  z-index: 3;
`;

const Cow = styled.div`
  position: absolute;
  left: 15%;
  bottom: 105px;
  font-size: 200px;
  transform: rotate(-6deg) scaleX(-1);
  z-index: 3;
`;

const ContentContainer = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  background-color: skyblue;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden !important;
  }
`;
