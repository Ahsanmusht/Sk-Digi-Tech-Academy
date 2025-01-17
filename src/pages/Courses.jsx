import React from "react";
import { courses } from "../components/assets/data/dummydata";
import { FaBook } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Courses = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleImageClick = () => {
    window.location.href= `${process.env.REACT_APP_BASE_URL}/register`; // Navigate to /register on image click
  };

  return (
    <>
      <section className="courses bg-[#F3F4F8] py-16">
        <div className="w-4/5 m-auto">
          <div className="heading mb-16 text-center">
            <h1 className="text-3xl font-semibold text-black">
              Explore Our Courses
            </h1>
            <span className="text-sm mt-2 block">
              Unlock your potential with our diverse range of tech and creative courses. Choose the format that works for you and start your journey toward success today!
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1 sm:grid-cols-2">
            {courses.map((item) => (
              <div className="box rounded-lg shadow-lg bg-white">
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-full">
                  <img
                    src={item.cover}
                    alt=""
                    onClick={handleImageClick}
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                </div>
                <div className="text p-3">
                  <h3 className="text-black my-4 font-medium h-10">{item.title}</h3>
                  <p className="text-sm mb-4">
                    {item.description || "This course is designed to give you the skills and knowledge needed to succeed in the field."}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaBook />
                      <span className="text-[14px] ml-2">10 lessons</span>
                    </div>
                    <div className="flex items-center">
                      <AiFillStar className="text-orange-500" />
                      <span className="text-[14px] ml-2">4.50(2)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 p-3">
                  <NavLink
                    to={`/course-details/${item.id}`}
                    className="text-[14px] flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View Details <HiOutlineArrowNarrowRight className="ml-1" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};



