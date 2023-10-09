import React from 'react'

function NewsLetter() {
  return (
    <div className='max-w-[1520] m-auto text-white px-4  bg-[#24262b]'>
      <div className='mx-auto grid lg:grid-cols-3'>
        <div className='lg: col-span-2 my-4'>
            <h1> Lorem ipsum dolor sit aus, harum, ea tempora quidem provident sit. Sunt qui recusandae error laborum fugiat.</h1>
            <p>Sign up for thhe advwnture</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-betweenw-full '>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='email' />

                <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>Notify Me </button>

            </div>
            <p>Lorem ipsum dolor sit unt, iure.
                <span className='text-[#00df9a]'>Privacy policy</span>
            </p>


        </div>
        <hr className='my-8 bg-gray-500' />
      </div>
    </div>
  )
}

export default NewsLetter
