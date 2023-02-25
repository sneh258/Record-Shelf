import React from 'react'
import './pageOneBody.css'
import { useNavigate } from "react-router-dom";

export default function PageOneBody() {
  const navigate = useNavigate();
  return (
    <div className='main_div'>
      <div className='emoji'>
       :((
      </div>
      <div className='text'>
      Seems a bit empty here...
      </div>
      <div>
        <button onClick={()=>navigate('/allsongs')} className='button'>sync</button>
      </div>

    </div>
  )
}
