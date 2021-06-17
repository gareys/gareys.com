import React, { createContext, ReactNode, useContext, useState } from 'react';
import { MainScene } from '../Content/MainScene/MainScene';

const ViewContext =
  createContext<
    | {
        view: JSX.Element | null;
        setView: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
      }
    | undefined
  >(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<JSX.Element | null>(<MainScene />);

  const value = { view, setView };
  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};
