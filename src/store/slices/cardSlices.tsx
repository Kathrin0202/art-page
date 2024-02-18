import { createSlice } from "@reduxjs/toolkit";

export interface ICardsArt {
  config: [];
  data: ICardArt;
  info: [];
}
export interface ICardArt {
  id: number;
  title: string;
  date_display: number;
  artist_title: string;
  image_id: number;
  place_of_origin: string;
  classification_titles: string;
  description: string;
}

const initialState: ICardsArt = {
  config: [],
  data: {
    id: 0,
    title: "",
    date_display: 0,
    artist_title: "",
    image_id: 0,
    place_of_origin: "",
    classification_titles: "",
    description: "",
  },
  info: [],
};

export const cardSlices = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardDetails: (state, action) => {
      const payload = action.payload;
      state.data = payload.data;
    },
  },
});

export const { setCardDetails } = cardSlices.actions;

export default cardSlices.reducer;
