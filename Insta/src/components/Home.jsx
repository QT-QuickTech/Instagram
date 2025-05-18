
import SideBar from './SideBar'
import React, { useRef } from 'react';
import Story from './sidebar/Story';
import { useParams } from 'react-router-dom';

function Home() {
  const {id}= useParams();
  console.log(id);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };
  return (
    <>
       <div className='flex font-mono '>
         <div className="height-full bg-white h-screen w-1/5 ">
            <SideBar id={id}/>
         </div>
         <div className='flex w-4/5'>
             <div className=' bg-gray-200 w-2/3'>
                <Story id={id}/>
                <div className=" bg-gray-100 ">
                  <p>Line 1</p>
                  <p>Line 2</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                   <p>Line 1</p>
                  <p>Line 2</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                   <p>Line 1</p>
                  <p>Line 2</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                  <p>Line 3</p>
                  <p>Line 4</p>
                  <p>Line 5</p>
                  <p>Line 6</p>
                  <p>Line 7</p>
                  <p>Line 8</p>
                  <p>Line 9</p>
                  <p>Line 10</p>
                </div>
             </div>
             <div className='bg-gray-400 h-screen w-1/3'>part2</div>
         </div>
       </div>
    </>
  )
}

export default Home