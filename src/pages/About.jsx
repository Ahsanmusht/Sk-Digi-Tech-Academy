import React, { useState } from "react";
import aboutImg from "../components/assets/images/abt.jpg";
import aboutImgBanner from "../components/assets/images/about-banner.jpg";
import imgs from "../components/assets/images/join1.png";
import { IoBookOutline } from "react-icons/io5";
import { FiMonitor, FiChevronDown } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { CiDesktopMouse2 } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";

// Accordion Component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <AiOutlineCheck className="text-green-500 mr-2" />
          <h4 className="text-sm font-semibold">{title}</h4>
        </div>
        <FiChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm mt-2">{content}</p>
      </div>
    </div>
  );
};

// AboutCard Component
const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300`}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

// AboutContent Section
export const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:w-full mr-8 md:mr-0 relative">
          <img src={aboutImg} alt="aboutImg" className=" rounded-xl" />
          <img
            src={aboutImgBanner}
            alt="aboutImg"
            className="rounded-xl absolute -bottom-14 -left-24 h-56 md:hidden"
          />
          <div className="img-group ml-24 mt-3">
            <img src={imgs} alt="" />
            <span className="text-[14px]">
              Join over <label className="text-black text-sm">4,000+</label>{" "}
              students
            </span>
          </div>
        </div>
        <div className="right w-2/3 md:w-full md:mt-16">
          <div className="heading w-4/5 md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Achieve Your Goals With Sk Digi Tech
            </h1>
            <span className="text-sm mt-2 block leading-6">
              Unlock the power of advanced technologies and elevate your career
              to new heights. At SK DigiTech, we combine cutting-edge tools and
              creative expertise to prepare you for a thriving tech-driven future.
            </span>

            {/* Accordion with new headings and paragraphs */}
            <Accordion
              title="Artificial Intelligence & Chatbots:"
              content="Step into the future with AI-powered solutions. Learn to design and implement intelligent chatbots and AI systems that revolutionize customer interaction and automate workflows. We specialize in creating innovative AI-driven applications that enhance user experiences."
            />
            <Accordion
              title="Advanced Web Technologies:"
              content="Master modern frameworks like React, Next.js, and beyond to build dynamic, fast, and scalable web applications. Our curriculum focuses on the latest advancements in web development, ensuring you're always ahead of the curve."
            />
            <Accordion
              title="Graphics & Ecommerce Solutions:"
              content="Bring businesses to life with stunning graphic designs tailored for eCommerce platforms. From store layouts to custom UI/UX designs, we provide tools and expertise to create captivating online shops."
            />

            <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
              <a href="#join-us" className="text-sm">
                Join Us to Redefine Your Skills
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Component
export const About = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Why An Scholercity Out Of The Ordinary
            </h1>
            <span className="text-sm mt-2 block">
              You don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-5 md:grid-cols-1">
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<IoBookOutline size={50} />}
              title="Web Development"
              desc="Master the art of creating stunning and responsive websites with cutting-edge technologies like HTML, CSS, JavaScript, React, and more."
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<FiMonitor size={50} />}
              title="Mobile App Development"
              desc="Dive into the world of mobile applications. Learn to design and develop apps for Android and iOS using frameworks like Flutter, React Native, and more."
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<CiDesktopMouse2 size={50} />}
              title="Backend Development"
              desc="Understand the backbone of every application. From databases to APIs, learn backend technologies like Node.js, Express, and Django."
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<SlBadge size={50} />}
              title="Graphics Designing"
              desc="Unleash your creativity! Develop professional designs for web, print, and digital media with tools like Adobe Photoshop, Illustrator, and Canva."
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};
