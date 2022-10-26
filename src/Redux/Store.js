import { configureStore } from '@reduxjs/toolkit'
import allReducers from './reducers/Combine'

const store=configureStore({reducer:allReducers},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store