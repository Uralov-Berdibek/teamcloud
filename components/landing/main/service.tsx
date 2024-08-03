import React from 'react';

const Service = () => {
  return (
    <section className='h-auto md:h-[100vh] bg-slate-100 py-20' id='services' aria-label='service'>
      <div className='w-full max-w-[1120px] mx-auto container px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-5'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-semibold leading-normal text-center md:text-left'>
            Cloud Composable <span className='text-blue-500'>Web Platform</span>.
          </h2>

          <p className='w-full md:w-[800px] text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wider text-gray-700 mb-4 md:ml-4 text-center md:text-left'>
            Streamlined orchestration, simplified and unified workflows, and real-time updates
            across infrastructure, workflows, websites, and teams.
          </p>
        </div>

        <ul className='grid gap-4 md:gap-6 md:grid-cols-3 grid-cols-1'>
          <li>
            <div className='w-full p-4 border shadow'>
              <figure className='card-icon'>
                <img
                  src='./images/service-1.svg'
                  className='w-[60px] mx-auto md:mx-0'
                  loading='lazy'
                  alt='service icon'
                />
              </figure>

              <h3 className='text-xl font-semibold my-4 text-center md:text-left'>
                <a href='#' className='card-title'>
                  Deploy faster
                </a>
              </h3>

              <p className='text-lg tracking-wider leading-6 text-gray-700 text-center md:text-left'>
                Cloud Core is a frontend cloud solution for developers to build and deploy
                future-proof digital solutions with modern, composable tooling that works with all
                modern frameworks and libraries.
              </p>
            </div>
          </li>

          <li>
            <div className='w-full p-4 border shadow'>
              <figure className='card-icon'>
                <img
                  src='./images/service-2.svg'
                  className='w-[60px] mx-auto md:mx-0'
                  loading='lazy'
                  alt='service icon'
                />
              </figure>

              <h3 className='text-xl font-semibold my-4 text-center md:text-left'>
                <a href='#' className='card-title'>
                  Unify all content
                </a>
              </h3>

              <p className='text-lg tracking-wider leading-6 text-gray-700 text-center md:text-left'>
                Cloud Connect is a data unification layer that gives web teams the freedom to create
                world-class websites, online stores, and applications with data from any existing or
                new content source.
              </p>
            </div>
          </li>

          <li>
            <div className='w-full p-4 border shadow'>
              <figure className='card-icon'>
                <img
                  src='./images/service-3.svg'
                  className='w-[60px] mx-auto md:mx-0'
                  loading='lazy'
                  alt='service icon'
                />
              </figure>

              <h3 className='text-xl font-semibold my-4 text-center md:text-left'>
                <a href='#' className='card-title'>
                  Click, edit, publish
                </a>
              </h3>

              <p className='text-lg tracking-wider leading-6 text-gray-700 text-center md:text-left'>
                Cloud Create gives digital teams the freedom to autonomously perform content and
                website updates faster than ever before with an intuitive visual editor and creator
                for your web applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
