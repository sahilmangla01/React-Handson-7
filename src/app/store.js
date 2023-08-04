import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../StudentSlice";

export default configureStore({
    reducer:{
        Student : StudentSlice
    }
})