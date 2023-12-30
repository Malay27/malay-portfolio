import React, { useState } from 'react';
import Hero1 from '../components/Hero1';
import { projectsList } from '../constant';
import { Link } from 'react-router-dom';

const Home = () => {
  const [projectAll,setProjectAll] =useState(projectsList);

  const wrapText=(str,maxLength)=>{
    if(!str) return "";
    return str.length>maxLength ? str.substring(0,maxLength)+" ...":str;
  }

  return (
    <div>
       <Hero1/>
       <p className='text-white font-bold text-[25px] m-3'>Projects</p>
       <div className='text-white flex flex-row justify-between items-center'>
        {
          projectAll.map((project)=>(
            <div key={project.title} className='flex flex-col justify-center w-[400px] border border-gray-200 m-4'>
              <img className='w-full h-[200px]' src={project.ss}/>
              <h2 className='text-[25px] font-bold m-1 text-yellow-200'>{project.title}</h2>
              <p className='text-[20px] m-1'>{wrapText(project.discription[0],70)}</p>
              <Link className='text-[12px] m-1 text-blue-400' to="/project">More</Link>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Home;