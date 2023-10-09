import React,{useState} from 'react'
import {mealData} from '../data/data'
import {ArrowSmRightIcon} from "@heroicons/react/outline"


function Meals2() {
  const [foods, setFoods]= useState(mealData)
  const filterCat = (catagory) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === catagory;
      })
    )
  }
  return (
    <div className='max-w-[1520] m-auto px-4 py-12 '>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
        <div className='flex flex-col lg:flex-row justify-center'> 
          <div className='flex justify-center md:justify-center'>
              <button onClick={()=>setFoods(mealData)} className='rounded-lg w-[70px] h-[30px] m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-ora'>All </button>
              <button onClick={()=>filterCat('pizza')} className='rounded-lg w-[70px] h-[30px] m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-ora'>Pizza</button>
              <button onClick={()=>filterCat('chicken')} className='rounded-lg w-[70px] h-[30px] m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-ora'>Chicken </button>
              <button onClick={()=>filterCat('salad')} className='rounded-lg w-[70px] h-[30px] m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-ora'>Salad </button>

          </div>

        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
            {
                foods.map((item)=>{
                    return(
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                         <div className='absolute w-full h-full rounded-3xl text-white'>
                        {/* <button className='border-dotted border-white  text-white mx-2 absolute bottom-4  rounded-xl '>Add to Cart</button> */}
                         </div>
                        <img className='w-full h-[200px] object-cover rounded-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between  py-2 px-4'>
                          <p className='px-2 font-bold '>{item.name}</p>
                          <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8'>{item.price}</p>
                        </div>
                        <div className=' pl-2 py-4'>
                          <p className='flex items-center -mt-7 ml-4'>View More <ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>

                    </div>
                    )

                })

            }

        </div>
      
    </div>
  )
}

export default Meals2
