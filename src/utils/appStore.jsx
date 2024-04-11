import {configureStore} from "@reduxjs/toolkit"
import toggleSideBarReducer from './toggleSideBar.jsx'

const store = configureStore({
    reducer:{
        toggleSideBar:toggleSideBarReducer,
    }
})

export default store;