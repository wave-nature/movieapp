import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const sendRequestInitialState = {
  isLoading: true,
  data: [],
  error: null,
};

const sendRequestSlice = createSlice({
  name: "request",
  initialState: sendRequestInitialState,
  reducers: {
    requestSent(state) {
      state.isLoading = true;
    },
    dataArrived(state, action) {
      state.isLoading = false;
      state.data = action.payload.movieData;
    },
    requestFailed(state, action) {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload.error;
    },
  },
});

const store = configureStore({
  reducer: { request: sendRequestSlice.reducer },
});
export const sendRequestActions = sendRequestSlice.actions;

export const getMovies = (url) => {
  return async (dispatch) => {
    dispatch(sendRequestActions.requestSent);

    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Something went wrong");
      const data = await response.json();
      dispatch(sendRequestActions.dataArrived({ movieData: data }));
    } catch (error) {
      dispatch(sendRequestActions.requestFailed({ error: error.message }));
    }
  };
};

export default store;
