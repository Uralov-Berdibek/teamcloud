import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full max-w-[1120px] mx-auto container pt-12 px-4 sm:px-6 lg:px-8'>
      <div className='border w-full h-[2px] bg-gray-900 mb-28'></div>

      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='mb-12 md:mb-0'>
          <a href='#' className='logo'>
            <img
              src='./images/cloud.png'
              width='200'
              height='40'
              alt='dprod logo'
              className='mb-4'
            />
          </a>

          <a
            href='mailto:companyinfo@mail.com'
            className='block text-lg text-gray-700 tracking-wider leading-6 mb-4'
          >
            companyinfo@mail.com
          </a>

          <a
            href='tel:+0987654321'
            className='block text-lg text-gray-700 tracking-wider leading-6 mb-4'
          >
            +098 765 4321
          </a>

          <ul className='flex items-center gap-4 mt-4'>
            <li>
              <a href='#' className='social-link'>
                <Facebook />
              </a>
            </li>

            <li>
              <a href='#' className='social-link'>
                <Instagram />
              </a>
            </li>

            <li>
              <a href='#' className='social-link'>
                <Twitter />
              </a>
            </li>

            <li>
              <a href='#' className='social-link'>
                <Globe />
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full md:ml-20'>
          <ul className='footer-list mb-12 sm:mb-0 sm:mr-10'>
            <li>
              <p className='text-lg font-semibold mb-4'>Links</p>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Company Details
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Our Newsfeed
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Service Standard
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Team Members
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Pricing Standard
              </a>
            </li>
          </ul>

          <ul className='footer-list mb-12 sm:mb-0 sm:mr-10'>
            <li>
              <p className='text-lg font-semibold mb-4'>Legal</p>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Agency Minimal
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Creative Agency
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Creative Layout
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Dark Layout
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                FAQ with Filter
              </a>
            </li>
          </ul>

          <ul className='footer-list mb-12 sm:mb-0'>
            <li>
              <p className='text-lg font-semibold mb-4'>Projects</p>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Projects Common
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Projects Creative
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Projects Standard
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                Dark Layout
              </a>
            </li>

            <li className='mb-4'>
              <a href='#' className='text-lg text-gray-700 tracking-wider leading-6'>
                eCommerce
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='border w-full h-[2px] bg-gray-900 mt-28 mb-10'></div>

      <div className='text-center mb-10'>
        <p className='text-sm text-gray-700 tracking-wider leading-6'>
          Copyright 2024 All Rights Reserved by teamcloud.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
