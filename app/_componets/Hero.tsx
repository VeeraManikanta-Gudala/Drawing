import React from 'react'

const Hero = () => {
  return (
<section className="bg-black lg:grid lg:h-screen lg:place-content-center dark:bg-white">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-white sm:text-5xl dark:text-white">
      <strong className='text-indigo-600'> Draw and Document</strong> your activites with ease.
       
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
        A tool to visualize your activities, create diagrams, and document processes effortlessly.
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Get Started
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>  )
}

export default Hero