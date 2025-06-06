import React from "react";
import { Clock, FileText, Code, User, ArrowRight } from "lucide-react";
const CourseCard = ({course}) => {
const {
  title,
  description,
  progress,
  modules,
  duration,
  category,
  level,
  badge,
}=course;
  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl transition-all">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-black-700 lg:text-2xl">{title}</h3>
          <p className="text-lg  text-muted-foreground mt-1 max-w-sm">{description}</p>
        </div>
        {badge && (
          <span className="bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-purple-600 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center text-sm text-gay-500 mt-4 gap-4 flex-wrap">
        <div className="flex itemscenter gap-1">
          <FileText className="w-4 h-4" /> {modules}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> {duration}
        </div>
        <div className="flex items-center gap-1">
          <Code className="w-4 h-4" /> {category}
        </div>
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" /> {level}
        </div>
      </div>
      <button className="mt-4 w-full border-t pt-3 text-indigo-600 hover:underline text-sm font-semibold flex justify-between items-center">
        {" "}
        Continue Learning <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CourseCard;
