import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  username: string;
}
export interface AuthState {
  user: User | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      if (action.payload === null) {
        state.user = null;
      } else {
        state.user = state.user
          ? { ...state.user, ...action.payload }
          : ({ ...action.payload } as User);
      }
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setAuth: (
      state,
      action: PayloadAction<{ user: User | null; accessToken: string | null }>,
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    clearAuth: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setUser, setToken, setAuth, clearAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
