import { configureStore } from '@reduxjs/toolkit'
import themeSlice from '../features/themeSlice'
import loginSlice from '../features/loginSlice'
import langSlice from '../features/langSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    theme: themeSlice,
    lang: langSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch