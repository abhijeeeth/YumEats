import React from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Toppicks() {
  return (
    <>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
      <div className='hidden lg:flex max-w-[1520px] m-auto px-2 py-2'>
        <Splide options={{perPage: 3, gap: "2rem",drag:'free', arrows:false}}>
        {
            topPicks.map((item)=>{
                return(
                    <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative '>
                        <div className='absolute w-full h-full bg-black/40 rounded-3xl text-white'>
                            <p className='px-2 font-bold '>{item.title}</p>
                            <p className='px-2'>{item.price}</p>
                            <button className='border-dotted border-white  text-white mx-2 absolute bottom-4  rounded-xl '>Add to Cart</button>
                        </div>
                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title}/>
                    </div>
                    </SplideSlide>
                )
            })
        }</Splide>
      </div>
    </>
  )
}

export default Toppicks
