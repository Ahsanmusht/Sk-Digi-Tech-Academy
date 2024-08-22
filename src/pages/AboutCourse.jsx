// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import aboutImg from "../components/assets/images/6773.jpg";
import aboutImgBanner from "../components/assets/images/images1.jfif";
import imgs from "../components/assets/images/join1.png";
import { AiOutlineCheck } from "react-icons/ai";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutCourse.css'

const AboutCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className='heading text-center py-12'>
        <h1 className='text-3xl font-semibold text-black'>
          We Share <br />
          about courses
            </h1>
        <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
      </div>
      <Slider {...settings} className='slider'>
        {/* Slide 1 */}
        <div className='mb-16'>
          <div className='container flex md:flex-col'>
            <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
              <img src={aboutImg} alt='aboutImg' className='rounded-xl' />
              <img src={aboutImgBanner} alt='aboutImgBanner' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80 md:hidden' />
              <div className='img-group ml-24 mt-3'>
                <img src={imgs} alt='join' />
                <span className='text-[14px]'>
                  Join over <label className='text-black text-sm'>4,000+</label> students
              </span>
              </div>
            </div>
            <div className='right w-2/3 md:w-full md:mt-16'>
              <div className='heading w-4/5 md:w-full'>
                <h1 className='text-3xl font-semibold text-black'>What is Web Development ?</h1>
                <span className='text-sm mt-2 block leading-6'>
                  <b>Web development</b> is a multifaceted field involving a variety of technologies and practices. It includes everything from designing the look and feel of a website to implementing the functionality that makes it interactive and engaging. Whether you're interested in building the visual aspects (<b>frontend</b>), the underlying logic (<b>backend</b>), or both (<b>full-stack</b>), web development offers a range of opportunities and specializations.
              </span>
                <ul className='my-5'>
                  <li className='text-sm flex items-center gap-5'>
                    <AiOutlineCheck className='text-green-500' /> Upskill your organization.
                </li>
                  <li className='text-sm flex items-center gap-5 my-2'>
                    <AiOutlineCheck className='text-green-500' /> Access more than 100K online courses
                </li>
                  <li className='text-sm flex items-center gap-5'>
                    <AiOutlineCheck className='text-green-500' /> Learn the latest skills
                </li>
                </ul>
                <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Duplicate the content if you want to show it multiple times in the same slide */}
        <div className='mb-16'>
          <div className='container flex md:flex-col'>
            <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
              <img src={aboutImg} alt='aboutImg' className='rounded-xl' />
              <img src={aboutImgBanner} alt='aboutImgBanner' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80 md:hidden' />
              <div className='img-group ml-24 mt-3'>
                <img src={imgs} alt='join' />
                <span className='text-[14px]'>
                  Join over <label className='text-black text-sm'>4,000+</label> students
              </span>
              </div>
            </div>
            <div className='right w-2/3 md:w-full md:mt-16'>
              <div className='heading w-4/5 md:w-full'>
                <h1 className='text-3xl font-semibold text-black'>What is Frontend Development ?</h1>
                <span className='text-sm mt-2 block leading-6'>
                  <b>Frontend development</b> is crucial for building visually appealing and functional web applications. It combines various technologies and practices to create engaging user experiences and ensure that websites work well across different devices and screen sizes.
              </span>
                <ul className='my-5'>
                  <li className='text-sm flex items-center gap-5'>
                    <AiOutlineCheck className='text-green-500' /> Upskill your organization.
                </li>
                  <li className='text-sm flex items-center gap-5 my-2'>
                    <AiOutlineCheck className='text-green-500' /> Access more than 100K online courses
                </li>
                  <li className='text-sm flex items-center gap-5'>
                    <AiOutlineCheck className='text-green-500' /> Learn the latest skills
                </li>
                </ul>
                <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-16'>
          <div className='container flex md:flex-col'>
            <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
              <img src={aboutImg} alt='aboutImg' className='rounded-xl' />
              <img src={aboutImgBanner} alt='aboutImgBanner' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80 md:hidden' />
              <div className='img-group ml-24 mt-3'>
                <img src={imgs} alt='join' />
                <span className='text-[14px]'>
                  Join over <label className='text-black text-sm'>4,000+</label> students
              </span>
              </div>
            </div>
            <div className='right w-2/3 md:w-full md:mt-16'>
              <div className='heading w-4/5 md:w-full'>
                <h1 className='text-3xl font-semibold text-black'>What is Backend Development ?</h1>
                <span className='text-sm mt-2 block leading-6'>
                  <b>Backend development</b> is essential for handling the <b>server-side logic</b>, database interactions, and <b>application security</b> that support the frontend user interface. It ensures that web applications function correctly, manage data efficiently, and provide a seamless experience for users.
              </span>
                <ul className='my-5'>
                  <li className='text-sm flex items-center gap-5'>
                    <AiOutlineCheck className='text-green-500' /> Upskill your organization.
                </li>
                  <li className='text-sm flex items-center gap-5 my-2'>
                    <AiOutlineCheck className='text-green-500' /> Access more than 100K online courses
                </li>
                  <li className='text-sm flex items-center gap-5'>
                    <AiOutlineCheck className='text-green-500' /> Learn the latest skills
                </li>
                </ul>
                <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat for additional slides as needed */}
      </Slider>
    </>
  );
};

export default AboutCourse;
