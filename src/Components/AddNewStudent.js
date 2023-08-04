import React, { useState } from 'react'
import './AddNewStudent.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudent } from '../StudentSlice'

const AddNewStudent = () => {
    const dispatch = useDispatch();
    const Navi = useNavigate();

    const [Name , setName] = useState('')
    const [Age , setAge] = useState('')
    const [Course , setCourse] = useState('')
    const [Batch , setBatch] = useState('')

    const idValue= useSelector((state)=>state.Student.length)

    const handleClick = ()=>{
        Navi('/student')
        dispatch(AddStudent({
            id :idValue ,
            Name,Age,Course,Batch
        }))
    }
  return (
    <div className=" form__main">
            <h1 className="heading">New Student</h1>

            <form  >            
                
                <div className="form">
                
                <div className='display '>
                <input type="text"  value={Name}  onChange={(e)=>setName(e.target.value)} autoComplete="off"/>
                <span className='span1'>Name</span>
                </div>
   
                <div className='display'>
                <input type="number"  value={Age}  onChange={(e)=>setAge(e.target.value)} autoComplete="off"/>
                <span className='span1'>Age</span>
                </div></div>


                <div className="form">
                  <div className='display'> 
                <input type="text" value={Course}  onChange={(e)=>setCourse(e.target.value)} autoComplete="off" />
                <span className='span1'>Course</span>
                </div>

                <div className='display'>
                <input type="text"  value={Batch}  onChange={(e)=>setBatch(e.target.value)} autoComplete="off" />
                <span className='span1'>Batch</span>
                </div></div>

                <div className="buttons">
                <button  className="btn cancel__btn" type="button" onClick={()=>Navi('/student')}>Cancel</button>
                <button className="btn " onClick={handleClick}>Submit</button>
                </div>
            </form>

        </div>

  )
}

export default AddNewStudent
