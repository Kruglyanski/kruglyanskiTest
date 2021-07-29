import {configureStore} from '@reduxjs/toolkit'
import companiesReducer from './companiesReducer'

export const store = configureStore({
    reducer: {
        companies: companiesReducer
    }
})
