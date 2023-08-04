import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'

const RouteComponent = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/student' element={<Student/>}></Route>
            <Route path='/contactUs' element= {<ContactUs/>}></Route>    
            <Route path='/addNewstudent' element= {<AddNewStudent/>}></Route>    
            <Route path='/editStudent' element= {<EditStudent/>}></Route>    
        </Routes> 
    </>
  )
}

export default RouteComponent
