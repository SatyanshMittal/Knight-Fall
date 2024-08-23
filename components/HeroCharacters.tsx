import React from 'react'
import  CharacterOne  from './character1'
const  HeroCharacters: React.FC = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
        <div className='text-3xl mx-auto text-white/80 '>Our Knights</div>
    <div className=' text-7xl h-screen flex gap-5 justify-center   w-full '>

    {/* <div className='w-1/4 mt-auto '>
    <CharacterOne/>
       <div className='w-full h-5 bg-red-600'></div>
       
       </div> */}

       
       <CharacterOne/>
      
      
       <CharacterOne/>
       
       <CharacterOne/>
    {/* <div className='w-1/4 '>
       <div className='w-full h-5 bg-red-600'></div>
       <CharacterOne/>
       </div>
    <div className='w-1/4 '>
       <div className='w-full h-5 bg-red-600'></div>
       <CharacterOne/>
       </div> */}
    
        
         </div>
         </div>
  )
}

export default HeroCharacters