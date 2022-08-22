import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { makeSelectors } from 'ts-selectors';

const initialState: {
  origin: null | string;
  destination: null | string;
  travelTimeInformation: null | string;
} = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const sliceName = 'nav';

const navSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    setOrigin: (state, action: PayloadAction<string | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string | null>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<string | null>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setDestination, setTravelTimeInformation, setOrigin } = navSlice.actions;

export const {
  origin: selectOrigin,
  destination: selectDestination,
  travelTimeInformation: selectTravelTimeInformation,
} = makeSelectors(initialState, sliceName);

export const { reducer: navReducer } = navSlice;
