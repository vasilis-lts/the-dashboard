import * as React from "react";

interface AppState {
  ActiveCurrency: 'usd' | 'eur'
}

const defaultAppState: AppState = {
  ActiveCurrency: 'usd',
};

const AppContext = React.createContext<any | undefined>(undefined);

const AppProvider = (props) => {
  const [state, setState] = React.useState(defaultAppState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider }
