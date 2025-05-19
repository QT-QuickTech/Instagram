import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Follower from '../Follower';

const API = 'http://localhost:8080/api';
function Profile() {

   const {id}= useParams();
   const path=`/user/${id}`;
   const [user,setUser] =useState({});
    
   useEffect(() => {
      
      async function fetchUser() {
        try {
          const response = await axios.get(API+path);
          setUser(response.data);  
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
      fetchUser();
    }, [path]);
    
    console.log(user);
   
  return (
     <>
     <div className='flex font-mono'>
         <div className="height-full w-1/4 ">
            <SideBar id={id}/>
         </div>

          <div>
               {/* Profile Header */}
               <div className="flex p-6 border-b">
               <div
                  className="w-36 h-36 rounded-full bg-cover bg-center mr-10"
                  style={{ backgroundImage: `url('${user.profilePictureUrl}')` }}
               ></div>
               <div>
                  <div className="flex items-center space-x-4">
                     <h1 className="text-2xl font-semibold">{user.userIdName}</h1>
                     <button className="bg-gray-100 px-4 py-1 rounded text-sm">Edit profile</button>
                     <button className="bg-gray-100 px-4 py-1 rounded text-sm">View archive</button>
                  </div>
                  <Follower/>
                  <div className="mt-4 text-sm leading-5">
                     <p className="font-semibold">{user.userName}</p>
                     <p>@{user.userIdName}</p>
                  </div>
               </div>
               </div>

               {/* Highlights */}
               <div className="flex overflow-x-auto space-x-4 px-6 py-4">
               {[
                  "natpuzz💖⚡", "🦋", "INDIA✈️", "🛵💨", "😊", "🥖🍑💕", "famly🖤"
               ].map((label, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                     <img
                     src="https://via.placeholder.com/70"
                     className="w-16 h-16 rounded-full border"
                     alt="story"
                     />
                     <span className="text-xs mt-1">{label}</span>
                  </div>
               ))}
               </div>

               {/* Tabs */}
               <div className="border-t border-b flex justify-center space-x-6 text-sm py-2 font-semibold">
               <div className="cursor-pointer">📷 POSTS</div>
               <div className="cursor-pointer">🎞 REELS</div>
               <div className="cursor-pointer">🔖 SAVED</div>
               <div className="cursor-pointer">👥 TAGGED</div>
               </div>

               {/* Posts Grid */}
               <div className="grid grid-cols-3 gap-1 p-1">
               {[1, 2, 3].map((_, i) => (
                  <div
                     key={i}
                     className="aspect-square bg-gray-300 bg-cover bg-center"
                     style={{ backgroundImage: "url('https://via.placeholder.com/300x300')" }}
                  ></div>
               ))}
               </div>
         </div>
     </div>
    </>
  );
}

export default Profile