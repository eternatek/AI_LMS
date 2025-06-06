import React from 'react'
import {
 
  Medal,
  Award,
  Star,
  Clock,
  Flashlight,
} from "lucide-react";

const badgeIcons = {
  "Speed Solver": <Flashlight className="w-8 h-8 text-indigo-500" />,
  "Top 5%": <Medal className="w-8 h-8 text-indigo-500" />,
  "Streak Master": <Award className="w-8 h-8 text-indigo-500" />,
  "Challenge Winner": <Star className="w-8 h-8 text-indigo-500" />,
  "Time Optimizer": <Clock className="w-8 h-8 text-indigo-500" />,
};
const recentBadges = [
  "Speed Solver",
  "Top 5%",
  "Streak Master",
  "Challenge Winner",
  "Time Optimizer",
];
const RecentBadges = () => {
  return (
     <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow mb-6">
         <h2 className="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold lg:font-semibold text-gray-800 dark:text-white mb-4">
        Recent Badges
      </h2>
      <div className='flex flex-wrap gap-4'>
      {recentBadges.map((badge, idx) => (
      <div key={idx} className='flex flex-col items-center '>
 <div className="mb-3 flex items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900 p-6 w-20 h-20">{badgeIcons[badge]}</div>
  <span className="text-sm text-gray-700 dark:text-gray-200 text-center md:text-lg lg:text-xl font-semibold">
              {badge}
            </span>
      </div>  
      ))}   
      </div>
     </div>
  )
}

export default RecentBadges