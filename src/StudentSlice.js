import {createSlice} from "@reduxjs/toolkit"
import Student from "../src/Data"


const StudentSlice = createSlice({
    name : "Student",
    initialState : Student,
    reducers :{

        AddStudent:(state, action)=>{
            state.push(action.payload)
        },

        EditStudents:(state,action)=>{
            const {id,NewName , NewAge ,NewCourse ,NewBatch} = action.payload;
            const existingStudent = state.find((student)=> student.id === id);
            existingStudent.Name = NewName
            existingStudent.Age = NewAge
            existingStudent.Course = NewCourse
            existingStudent.Batch = NewBatch
        }
    }
})
export default StudentSlice.reducer
export const {AddStudent, EditStudents} = StudentSlice.actions