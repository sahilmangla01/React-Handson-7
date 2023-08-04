import React from 'react'
import './student.css'
import {useSelector} from "react-redux"
import { NavLink, useNavigate } from 'react-router-dom'

const Student = () => {
    const data = useSelector((state) => state.Student)
    console.log(data);
    const Navi = useNavigate()
    return(
        <>
              <div className="student__main">
             <div className="studentHead">
                 <div className="studentText">Student Details</div>
                 <button onClick={()=>Navi('/addNewStudent')} className="studentAddBtn">Add New Student</button>
             </div>
             
             <div>
             <div className="grid__container grid__border">
                 <div className="grid__item">Name</div>
                 <div className="grid__item">Age</div>
                 <div className="grid__item">Course</div>
                 <div className="grid__item">Batch</div>
                 <div className="grid__item">Change</div>
 
                 </div>
                 {
                     data.map((e)=>{
                         return(
                             
                             <div key={e.id} className="grid__container">
                             <div className="grid__item">{e.Name}</div>
                             <div className="grid__item">{e.Age}</div>
                             <div className="grid__item">{e.Course}</div>
                             <div className="grid__item">{e.Batch}</div>
                             <div className="grid__item"><NavLink state={{data :e.id}} to="/editStudent">Edit</NavLink></div>
                             </div>
                            
                         )
                     })
                 }
 
         </div>
         </div>
        
        </>
     )
}

export default Student
