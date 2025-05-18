import React from 'react'
import SideBar from '../SideBar'
import { useParams } from 'react-router-dom'
function Profile() {
   const {id}=useParams();
   console.log("profile : "+id);
  return (
     <>
     <div className='flex font-mono'>
        <div className="height-full w-1/4 ">
            <SideBar id={id}/>
         </div>
        <div>Profile</div>
     </div>
    </>
  
  )
}

export default Profile