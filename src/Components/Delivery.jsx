import React from 'react'

export default function Delivery() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'> Quick Delivery</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" />
        <div className='flex flex-col justify-center'>
            <p className='text-green-400 font-bold text-3xl'>Yum 
                <span className='font-bold text-red-900'>Eats</span></p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience On-demand</h1>
            <p className='pr-16 font-semibold'>
                
Yum Eats is an online food delivery website that allows users to order food from their favorite restaurants and have it delivered to their door. Yum Eats offers a wide variety of cuisines to choose from, including Indian, Chinese, Italian, Mexican, and more.

To use Yum Eats, users simply need to create an account and enter their delivery address. Once they are logged in, they can browse the list of restaurants and add items to their cart. Once they are finished shopping, they can review their order and checkout.

Yum Eats offers a variety of payment options, including credit card, debit card, and PayPal. 
            </p>
            <button className='bg-gray-900 text-green-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started </button>
        </div>
     </div>
    </div>
  )
}
