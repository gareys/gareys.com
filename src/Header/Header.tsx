import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import logoImg from '../_assets/logo.png';
import { DARK_THEME, LIGHT_THEME } from '../_theme/theme';
import { FarmScene } from '../Content/FarmScene/FarmScene';
import { useCustomThemeContext } from '../_contexts/customThemeContext';
import { useViewContext } from '../_contexts/viewContext';
import { useCountContext } from '../_contexts/countContext';

export const Header = () => {
  const setTheme = useCustomThemeContext();
  const theme = useTheme();
  const { view, setView } = useViewContext();
  const { state: countState, dispatch: countDispatch } = useCountContext();
  const [stopIt, setStopIt] = useState(false);

  const handleSetTheme = () => {
    setTheme(theme.name === 'light' ? DARK_THEME : LIGHT_THEME);
    if (view?.type.displayName === 'FarmScene') {
      return;
    }
    if (countState.count === 6) {
      countDispatch({ type: 'reset' });
      setView(<FarmScene previousContent={view} />);
    }
    countDispatch({ type: 'increment' });
  };

  return (
    <>
      <TopSection className="App-header">
        <Logo onClick={handleSetTheme} className="App-logo" />
        <div>
          <h1>Gareys.com</h1>
          <Blink
            stop={stopIt}
            onClick={() => {
              setStopIt(!stopIt);
            }}
          >
            I apologize ahead of time
          </Blink>
        </div>
      </TopSection>
      <ColorBar color={theme.primaryButton} />
      <ColorBar color={theme.secondaryButton} />
      <ColorBar color={theme.tertiaryButton} />
    </>
  );
};

const TopSection = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0;
  background: ${(props) => props.theme.headerBackground};
  background: ${(props) => props.theme.headerBackgroundGradient};
  overflow: hidden;
  max-height: 80px;
  div {
    text-align: right;
    h1 {
      margin: 10px 0 0 0;
      color: ${(props) => props.theme.headerTitle};
    }
    small {
      color: ${(props) => props.theme.headerSubTitle};
    }
  }
`;

const Logo = styled.div`
  cursor: help;
  height: 120px;
  width: 80px;
  position: relative;
  top: -10px;
  background-image: url(${logoImg});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: translateY(-30px);
  }
`;

const Blink = styled.small<{ stop: boolean }>`
  cursor: not-allowed;
  position: relative;
  animation: shiver 100ms step-start
    ${(props) => (props.stop ? '' : 'infinite')};

  @keyframes shiver {
    from {
      left: -3px;
    }
    25% {
      left: 2px;
    }
    50% {
      left: -1px;
    }
    75% {
      left: -4px;
    }
    to {
      left: 2px;
    }
  }
`;

const ColorBar = styled.div<{ color: string }>`
  border-bottom: 10px solid ${(props) => props.color};
`;
