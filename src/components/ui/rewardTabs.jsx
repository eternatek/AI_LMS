import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const RewardsTab = () => {
  const badges = [
    {
      icon: "⚡",
      title: "Speed Solver",
      desc: "Finished 10 exams before time",
      date: "Apr 10, 2025",
      color: "bg-blue-500 text-blue-600",
      earned: true,
    },
    {
      icon: "🏅",
      title: "Top 5%",
      desc: "In JavaScript leaderboard",
      date: "Apr 8, 2025",
      color: "bg-purple-500 text-purple-600",
      earned: true,
    },
    {
      icon: "🎯",
      title: "Streak Master",
      desc: "7-day learning streak",
      date: "Apr 5, 2025",
      color: "bg-green-500 text-green-600",
      earned: true,
    },
    {
      icon: "⭐",
      title: "Challenge Winner",
      desc: "Weekly challenge topper",
      date: "Apr 2, 2025",
      color: "bg-yellow-500 text-yellow-600",
      earned: true,
    },
    {
      icon: "⏱️",
      title: "Time Optimizer",
      desc: "Improved time by 30%",
      date: "Mar 28, 2025",
      color: "bg-pink-500 text-pink-600",
      earned: true,
    },
    {
      icon: "👤",
      title: "Helpful Friend",
      desc: "Answered 50+ community questions",
      date: "",
      color: "bg-gray-500 text-gray-400",
      earned: false,
    },
    {
      icon: "✅",
      title: "Perfect Attendance",
      desc: "30-day login streak",
      date: "",
      color: "bg-gray-500 text-gray-400",
      earned: false,
    },
    {
      icon: "📚",
      title: "Knowledge Explorer",
      desc: "Complete courses in 5 different subjects",
      date: "",
      color: "bg-gray-500 text-gray-400",
      earned: false,
    },
  ];
  return (
    <div className="w-full bg-white p-6 rounded-xl border shadow-2xl">
      <Tabs defaultValue="badges" className="w-full">
        <TabsList className="mb-6 p-2">
          <TabsTrigger value="badges">🎖️ Badges</TabsTrigger>
          <TabsTrigger value="achievements">🏆 Achievements</TabsTrigger>
          <TabsTrigger value="store">🎁 Reward Store</TabsTrigger>
        </TabsList>
        <TabsContent value="badges">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl p-4 text-center ${
                  badge.earned ? "bg-white" : "bg-gray-100 opacity-80"
                }`}
              >
                <div
                  className={`mx-auto mb-3 w-20 h-20 flex items-center justify-center rounded-full text-2xl font-bold ${badge.color}`}
                >
                <span className="flex items-center justify-center h-6 w-6"> {badge.icon}</span> 
                </div>
                <div
                  className={`font-bold text-xl ${
                    badge.earned ? "text-black" : "text-gray-500"
                  }`}
                >
                  {badge.title}
                </div>
                <div className="text-lg text-gray-600">{badge.desc}</div>
                <div className="text-lg text-gray-400 mt-1">
                  {badge.earned ? `Earned: ${badge.date}` : "Coming soon"}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        {/* Achievements */}
        <TabsContent value="achievements">
          <div className="text-center text-gray-600">
            🏗️ Achievements feature coming soon...
          </div>
        </TabsContent>
        {/* Reward Store */}
        <TabsContent value="store">
          <div className="text-center text-gray-600">
            🛍️ Reward Store launching soon. Stay tuned!
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RewardsTab;
