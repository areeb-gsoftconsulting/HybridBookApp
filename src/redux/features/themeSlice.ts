import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface ThemeState {
  isDark: boolean,
}

// Define the initial state using that type
const initialState: ThemeState = {
  isDark: false
}

export const themeSlice = createSlice({
    name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getTheme: (state, action: PayloadAction<any>) => {
      state.isDark = action.payload  
    },
    
  },
})

export const { getTheme } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.isDark

export default themeSlice.reducer