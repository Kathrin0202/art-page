import { createSlice } from "@reduxjs/toolkit";

export interface ICard {
  id: number;
  title: string;
  updated_at: number;
  artist_title: string;
  image_id?: number;
  like: boolean;
}

export interface IPagination {
  total: number;
  limit: number;
  total_pages: number;
  current_page: number;
}

export interface ICards {
  pagination: IPagination;
  data: ICard[];
  filterStatus: boolean;
}

const initialState: ICards = {
  pagination: {
    total: 0,
    limit: 0,
    total_pages: 0,
    current_page: 0,
  },
  data: [],
  filterStatus: false,
};

export const cardsSlices = createSlice({
  name: "cards",
  initialState,
  reducers: {
    getCard: (state, action) => {
      const payload = action.payload ?? initialState;
      state.pagination = payload.pagination;
      state.data = payload.data;
      state.data.forEach((dat: ICard) => {
        dat.like = false;
      });
    },
    setPageNumber: (state, action) => {
      const payload = action.payload ?? initialState;
      state.pagination.limit = payload.limit;
      state.pagination.current_page = payload.current_page;
      state.pagination.total_pages = payload.total_pages;
    },
    setLikeCard: (state, action) => {
      const dataIndex = state.data.find((el) => el.id === action.payload.id);
      if (dataIndex) {
        dataIndex.like = !dataIndex.like;
      }
    },
    setDeleteCard: (state, action) => {
      state.data = state.data.filter((dat) => dat.id !== action.payload.id);
    },
    setFilterStatus(state) {
      state.filterStatus = !state.filterStatus;
    },
  },
});

export const {
  getCard,
  setPageNumber,
  setLikeCard,
  setDeleteCard,
  setFilterStatus,
} = cardsSlices.actions;

export default cardsSlices.reducer;
