import React, { createContext, useReducer, useContext, useEffect } from 'react';

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = { cart: [] };

const init = () => {
  try {
    const saved = localStorage.getItem('cart');
    return { cart: saved ? JSON.parse(saved) : [] };
  } catch {
    return initialState;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (state.cart.find(item => item.id === action.payload.id)) return state;
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE':
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) };
    case 'CLEAR':
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useBookingState = () => useContext(StateContext);
export const useBookingDispatch = () => useContext(DispatchContext);
