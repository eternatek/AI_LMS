import { Card } from '@/components/ui/card';
import React from 'react';

const  GraduationDashBoardPage= () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-black overflow-y-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learning Path</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Structured courses to enhance your skills
        </p>
      </div>

      {/* Recommended Path */}
      <Card className="p-6 bg-violet-50 text-gray-900 dark:bg-gray-800 dark:text-white mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold">Recommended Learning Path</h2>
            <p className="mt-2">
              Based on your recent exams and performance, we've created a personalized path.
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Estimated completion: 3 months
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition">
            View Learning Path
          </button>
        </div>
      </Card>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Course Card 1 */}
        <Card className="p-4 bg-white dark:bg-gray-900 shadow-md">
          <h3 className="text-lg font-semibold">Web Development Fundamentals</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Learn HTML, CSS, and JS basics for building modern apps
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-violet-600 h-2 rounded-full w-[65%]" />
          </div>
          <p className="text-xs text-gray-500">Progress: 65%</p>
          <button className="mt-3 w-full text-center text-violet-600 font-medium">Continue Learning</button>
        </Card>

        {/* Course Card 2 */}
        <Card className="p-4 bg-white dark:bg-gray-900 shadow-md">
          <h3 className="text-lg font-semibold">Advanced JavaScript Concepts</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Dive into closures, prototypes, async & more
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-violet-600 h-2 rounded-full w-[30%]" />
          </div>
          <p className="text-xs text-gray-500">Progress: 30%</p>
          <button className="mt-3 w-full text-center text-violet-600 font-medium">Continue Learning</button>
        </Card>

        {/* Repeat for other course cards */}
      </div>
    </div>
  );
};

export default GraduationDashBoardPage;
