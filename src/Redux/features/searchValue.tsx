import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: '',
};

export const searchValue = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchValue.actions;


