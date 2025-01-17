import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from "../components/assets/data/dummydata";
import { ChevronDown } from 'lucide-react';

export const CourseDetail = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <h2 className="text-2xl font-bold">Course not found</h2>;
  }

  const modules = course.modules || [];

  const togglePanel = (panelIndex) => {
    setExpandedPanel(expandedPanel === panelIndex ? null : panelIndex);
  };

  return (
    <div className="pt-32 flex justify-center items-center gap-8 px-4">
      <div className="w-[45%] relative group">
        <img 
          src={course.cover} 
          alt={course.title} 
          className="w-full h-[520px] rounded-3xl object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
          <Link 
            to={`${process.env.REACT_APP_BASE_URL}/register`} 
            className="px-6 py-3 bg-black/50 text-white rounded-tr-3xl rounded-bl-3xl opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-lg hover:bg-black/70"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="w-[45%]">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {course.title}
        </h1>
        <p className="text-lg leading-7 text-black mb-4">
          {course.description}
        </p>
        
        <div className="flex justify-between mb-6">
          <p className="text-lg">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className="text-lg mr-12">
            <strong>Duration:</strong> {course.duration}
          </p>
        </div>

        <h2 className="text-xl font-extrabold py-2 mb-4">
          {course.learn}
        </h2>

        {modules.length > 0 ? (
          <div className="space-y-5">
            {modules.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => togglePanel(index)}
                  className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedPanel === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`px-4 py-3 transition-all duration-200 ${
                  expandedPanel === index ? 'block' : 'hidden'
                }`}>
                  <p className="text-lg leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg">No modules available for this course.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;