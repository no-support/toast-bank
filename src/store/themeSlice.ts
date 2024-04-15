import { createSlice } from '@reduxjs/toolkit'

const getInitialTheme = () => {
  const themeColor = 'light'
  // return localStorage.getItem('themeColor') ?? 'light' // localStorage is not defined
  return themeColor
}

interface ThemeState {
  themeColor: string
}

const initialState: ThemeState = {
  themeColor: getInitialTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeColor(state) {
      state.themeColor = state.themeColor === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeColor', state.themeColor)
    },
    setThemeColor(state, action) {
      state.themeColor = action.payload === 'light' ? 'light' : 'dark'
    },
  },
})

export const { toggleThemeColor, setThemeColor } = themeSlice.actions
export default themeSlice.reducer
