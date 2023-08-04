import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { EditStudents } from '../StudentSlice';


const EditStudent = () => {
    const idValue =useLocation().state.data
    console.log(idValue);
    const data =useSelector((state)=>state.Student)
    const dispatch = useDispatch()

    const Navi = useNavigate()
    const [NewName , setNewName] = useState(data[idValue].Name)
    const [NewAge , setNewAge] = useState(data[idValue].Age)
    const [NewCourse , setNewCourse] = useState(data[idValue].Course)
    const [NewBatch , setNewBatch] = useState(data[idValue].Batch)

    

    const handleClick= ()=>{
        dispatch(EditStudents({
            id:idValue,
            NewName,
            NewAge,
            NewCourse,
            NewBatch
        }))
        Navi('/student')

    }

  return (
    <div className=" form__main">
            <h1 className="heading">Edit Student</h1>


            <form  >            
                
                <div className="form">
                
                <div className='display '>
                <input type="text"  value={NewName}  onChange={(e)=>setNewName(e.target.value)} autoComplete="off"/>
                <span className='span2'>Name</span>
                </div>
   
                <div className='display'>
                <input type="number"  value={NewAge}  onChange={(e)=>setNewAge(e.target.value)} autoComplete="off"/>
                <span className='span2'>Age</span>
                </div></div>


                <div className="form">
                  <div className='display'> 
                <input type="text" value={NewCourse}  onChange={(e)=>setNewCourse(e.target.value)} autoComplete="off" />
                <span className='span2 '>Course</span>
                </div>

                <div className='display'>
                <input type="text"  value={NewBatch}  onChange={(e)=>setNewBatch(e.target.value)} autoComplete="off" />
                <span className='span2'>Batch</span>
                </div></div>

                <div className="buttons">
                <button  className="btn cancel__btn" type="button" onClick={()=>Navi('/student')}>Cancel</button>
                <button className="btn " onClick={handleClick}>Submit</button>
                </div>
            </form>

        </div>
  )
}

export default EditStudent
