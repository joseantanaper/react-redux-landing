import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

export const storeTheme = "theme"
export const LIGHT = "light"
export const DARK = "dark"

export interface ThemeState {
  value: string
  status: "idle" | "loading" | "failed"
}

const initialState: ThemeState = {
  value: String(localStorage.getItem(storeTheme)) || LIGHT,
  status: "idle",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    light: (state) => {
      state.value = LIGHT
      localStorage.setItem(storeTheme, String(state.value))
      console.log("themeSlice", LIGHT, state.value)
    },
    dark: (state) => {
      state.value = DARK
      localStorage.setItem(storeTheme, String(state.value))
      console.log("themeSlice", DARK, state.value)
    },
  },
})

export const { light, dark } = themeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTheme = (state: RootState) => state.theme.value

export default themeSlice.reducer
