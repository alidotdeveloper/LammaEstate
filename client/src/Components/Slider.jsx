import React, { useEffect, useState } from 'react'
import { listData } from "../lib/dummyData";
import CLOSE from "../assets/images/close.png"
function Slider() {
    const [imageSlide, setimageSlide]= useState('');
    const[ imageIndex, setImageIndex] = useState(0);

    const images = listData.map((f)=> f.img)
    console.log("length", images.length)
    useEffect(()=>{      
        setimageSlide(images)
    }, [])
    
    const handleNextClick = ()=>{
        setImageIndex(imageIndex+1)

    }
    const handlePrevClick = ()=>{
        setImageIndex(imageIndex-1)

    }
    const handleClose = ()=>{
       setImageIndex(null)
    }
  return (
    <div>
        

<div id="default-carousel" class="relative w-full" >
    
    <div class=" h-screen overflow-hidden rounded-lg md:h-screen z-0">
    <button
                    onClick={handleClose}
                    className="flex justify-end p-2 absolute top-0 right-0"
                    style={{ zIndex: 999 }}
                >
                    <img src={CLOSE} alt="Close" style={{ width: "30px", height: "30px" }} />
                </button>
    {listData.map((l, index)=>{
  
        return(
            <>
           
        <div key={index} class=" duration-700 ease-in-out z-0" >
            <img key={l.id} src={imageSlide[imageIndex]} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        </>
    )
        })}
    </div>

 

    <button type="button" disabled={imageIndex === 0}  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
        <span onClick={()=>handlePrevClick()} class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only"  >Previous</span>
        </span>
    </button>
  
    <button type="button" disabled={images.length -2 < imageIndex}   class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
        <span onClick={()=> handleNextClick()} class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only" >Next</span>
        </span>
    </button>
    
</div>

    </div>
  )
}

export default Slider
