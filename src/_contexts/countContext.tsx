import React, { createContext, ReactNode, useContext, useReducer } from 'react';

type Action = { type: 'increment' } | { type: 'reset' };
type Dispatch = (action: Action) => void;
type State = { count: number };
const CountStateContext =
  createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'reset': {
      return { count: 0 };
    }
    default: {
      const exhaustedAction: { type: string } = action;
      throw new Error(`Unhandled action type: ${exhaustedAction.type}`);
    }
  }
};

type CountProviderProps = { children: ReactNode };
export const CountProvider = ({ children }: CountProviderProps) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  );
};

export const useCountContext = () => {
  const context = useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
