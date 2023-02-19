import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppState = () => {
  const [state, setState] = useContext(AppContext);

  function setActiveCurrency(currency: string) {
    setState(state => ({ ...state, ActiveCurrency: currency }));
  }

  return {
    ActiveCurrency: state.ActiveCurrency,
    setActiveCurrency,
  }
}

export default useAppState;