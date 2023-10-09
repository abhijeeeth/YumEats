import React,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

function Feature() {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const preSlider =()=>{
        const isFirst = currentIndex ===0
        const newIndex = isFirst ? sliders.length-1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
  return (
    <div className='max-w-[1520px] h-[700px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-cover duration-500' style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
    
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-14 text-2xl rounded-full p-2 bg-orange-700/25 text-white '>
            <BsChevronCompactLeft onClick={preSlider}/>

        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-14 text-2xl rounded-full p-2 bg-orange-700/25 text-white '>
            <BsChevronCompactRight onClick={preSlider}/>
            
        </div>
      
    </div>
  )
}

export default Feature
