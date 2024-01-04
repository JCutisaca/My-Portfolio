import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './features/projectsSlice'

export const store = configureStore({
    reducer: {
        projectsReducer
    }
})