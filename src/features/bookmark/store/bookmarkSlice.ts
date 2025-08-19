import { createSlice } from '@reduxjs/toolkit'

interface Movie {
  id: number
  title: string
  vote_average: number
}

interface BookmarkState {
  movies: Movie[]
}

const initialState: BookmarkState = {
  movies: []
}

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
        const exist = state.movies.some(item => item.id === action.payload.id)
        if(exist) {
           state.movies = state.movies.filter(item => item.id !== action.payload.id)
        } else {
            state.movies = [...state.movies, action.payload]
        }
    }
  }
})
export const { toggleBookmark } = bookmarkSlice.actions

export default bookmarkSlice.reducer