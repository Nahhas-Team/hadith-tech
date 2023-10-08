import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import Playbar from '@/components/dashboard/Playbar'

const page = () => {
  return (
    <div className="w-full">
      <div className='flex gap-5 p-5 container max-w-[1500px] h-[calc(100vh-100px)]'>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          {/* Thumbnail */}
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold cursor-not-allowed opacity-50">
            Coming Soon
            {/* Podcasts */}
            {/* New episodes */}
          </div>
        </div>
      </div>
      <Playbar />
    </div>
  )
}

export default page