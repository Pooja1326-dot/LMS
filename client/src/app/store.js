import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './rootRducer'
import { authApi } from "@/features/api/authApi"

export const appstore=configureStore({
   reducer:rootReducer,
   middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware)
})