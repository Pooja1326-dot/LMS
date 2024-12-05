import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 pt-24 pb-10 text-center'>
        <div className='mx-auto'> 
            <h1 className='text-white text-4xl font-bold mb-4'>Find the Best Courses for You</h1>
            <p className='text-gray-200 dark:text-gray-400 mb-8'>Discover, Learn and Upskill with our wide range of courses</p>
            <form action='' className='flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-2xl mx-auto mb-7'>
                <Input type="text"  placeholder="Search Courses" className="flex border-none focus-visible:ring-0 px-6 py-5 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500">
                </Input>
                <Button className="bg-blue-600 dark:bg-gray-700 text-white px-9 py-5 rounded-r-full hover:bg-blue-700 ">Search</Button>
            </form>
            <Button className="bg-white text-blue-600 rounded-full hover:bg-gray-200 dark:bg-gray-800">Explore Courses</Button>
        </div>
    </div>
  )
}

export default HeroSection
