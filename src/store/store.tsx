import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./slices/cardsSlices";
import cardReducer from "./slices/cardSlices";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    card: cardReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
