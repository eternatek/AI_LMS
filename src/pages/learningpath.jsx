import React from "react";
import { Clock, FileText, Code, User, ArrowRight } from "lucide-react";
import CourseCard from "@/components/ui/course-card";
 const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics for building modern web applications",
      progress: 65,
      modules: "5/8 modules",
      duration: "12 hours",
      category: "Programming",
      level: "Beginner",
      badge: "Popular",
    },
    {
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into JavaScript with closures, prototypes, async programming and more",
      progress: 30,
      modules: "3/10 modules",
      duration: "8 hours",
      category: "Programming",
      level: "Intermediate",
      badge: "Popular",
    },
    // Add more courses as needed
    {
    
    title: "SQL Masterclass",
    description: "Master database queries, joins, transactions and database design concepts",
    progress: 90,
    modules: "5/6",
    duration: 8,
    category: "Database",
    level: "Intermediate",
    badge: "Popular",
  },   
   {
    title: "Python for Data Science",
    description: "Learn Python with focus on data analysis and visualization",
    progress: 10,
    modules: "1/12",
    duration: 20,
    category: "Data Science",
    level: "Intermediate",
    badge: "Popular",
  },
 {
    title: "Effective Communication Skills",
    description: "Improve your communication in professional settings",
    progress: 45,
    modules: "2/5",
    duration: 6,
    category: "Soft Skills",
    level: "All Levels",
     badge: "Popular",
  },
  ];

const RecommendedCard = () => {
  return (
   <div className="bg-indigo-50 py-6 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-start  sm:items-center relative mb-6 w-full p-8 ">
    <div>
    <h2 className="text-lg font-semibold mb-1 text-black">Recommended Learning Path</h2>
        <h3 className="text-xl font-bold text-black">Full-Stack Web Development</h3>
        <p className="text-gray-600 mb-2 max-w-md">
          Based on your recent exams and performance, we've created a personalized path to help you master full-stack web development.
        </p>  
        <div className="flex items-center gap-2 text-gray-500 text-sm">
           <Clock className="w-4 h-4" /> Estimated completion: 3 months  
            </div> 
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
          View Learning Path
        </button>   
    </div>
     <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
        Personalized
      </div>
   </div>
  )
};

const LearningPage= () => {

  return (
   <div className="p-4 min-h-screen">
    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">Learning Path</h1>
    <p className="text-gray-500 mb-4 text-md">Structured courses to enhance your skills</p>
   <RecommendedCard/>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {courses.map((course,index)=>(
        <CourseCard key={index} course={course}/>
    ))}
   </div>
   </div> 
  );
};

export default LearningPage;
