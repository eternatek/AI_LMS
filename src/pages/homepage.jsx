import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RecentBadges from "@/components/ui/recent-badges";
import { BarChart2, BookOpen, Clock, Layers } from "lucide-react";
import React from "react";
const rankingIcons = {
  JavaScript: "🟨",
  Python: "🐍",
  SQL: "🧮",
  "Communication Skills": "🗣️",
};

const rankings = [
  { subject: "JavaScript", rank: "#3", total: 1254, change: "up" },
  { subject: "Python", rank: "#12", total: 987, change: "same" },
  { subject: "SQL", rank: "#5", total: 765, change: "up" },
  { subject: "Communication Skills", rank: "#18", total: 432, change: "down" },
];

const statsData = [
  {
    title: "Exams Taken",
    value: "24",
    icon: "BookOpen",
    change: "+15%",
    changeColor: "text-green-600",
    subtext: "vs. last month",
  },
  {
    title: "Study Hours",
    value: "42h",
    icon: "Clock",
    change: "+10%",
    changeColor: "text-green-600",
    subtext: "more than usual",
  },
  {
    title: "Topics Covered",
    value: "18",
    icon: "Layers",
    change: "−5%",
    changeColor: "text-red-500",
    subtext: "vs. last month",
  },
  {
    title: "Your Rank",
    value: "#12",
    icon: "BarChart2",
    change: "+2",
    changeColor: "text-green-600",
    subtext: "positions gained",
  },
];
const iconMap = {
  BookOpen: <BookOpen className="w-6 h-6 text-gray-400 dark:text-gray-300" />,
  Clock: <Clock className="w-6 h-6 text-gray-400 dark:text-gray-300" />,
  Layers: <Layers className="w-6 h-6 text-gray-400 dark:text-gray-300" />,
  BarChart2: <BarChart2 className="w-6 h-6 text-gray-400 dark:text-gray-300" />,
};
const weeklyChallenges = [
  {
    title: "JavaScript Promises",
    type: "Technical",
    coins: 200,
    difficulty: "Medium",
    questions: 10,
    time: "15 min",
  },
  {
    title: "Problem Solving Scenarios",
    type: "Soft Skills",
    coins: 150,
    difficulty: "Easy",
    questions: 8,
    time: "20 min",
  },
  {
    title: "System Design Challenge",
    type: "Technical",
    coins: 300,
    difficulty: "Hard",
    questions: 5,
    time: "30 min",
  },
];
const examHistory = [
  {
    subject: "JavaScript",
    topic: "Advanced Functions",
    score: "85%",
    date: "5/10/2025",
    status: "passed",
  },
  {
    subject: "Python",
    topic: "Data Structures",
    score: "78%",
    date: "5/8/2025",
    status: "passed",
  },
  {
    subject: "SQL",
    topic: "Joins and Queries",
    score: "65%",
    date: "5/5/2025",
    status: "review",
  },
];
const subjectPerformance = [
  { name: "JavaScript", percent: 85 },
  { name: "Python", percent: 72 },
  { name: "SQL", percent: 92 },
  { name: "Communication Skills", percent: 64 },
  { name: "Problem Solving", percent: 78 },
];

const HomePage = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-black overflow-y-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-xl dark:text-gray-300">
          Welcome back, Alex! Here's your learning progress.
        </p>
      </div>
      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 justify-between items-center"
          >
            <div>
              <p className="text-sm md:text-lg lg:text-lg font-semibold text-gray-600 dark:text-gray-400">
                {item.title}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-indigo-600">
                {item.value}
              </h2>
              <p
                className={`text-sm md:text-medium lg:text-lg mt-1 ${item.changeColor}`}
              >
                {item.change}{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  {item.subtext}
                </span>
              </p>
            </div>
            {iconMap[item.icon]}
          </div>
        ))}
      </div>

      {/*  Weekly Challenges */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1 space-y-6">
          {/* Left Column */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Weekly Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {weeklyChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8"
                >
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="ghost">{challenge.type}</Badge>
                    <span className="text-yellow-500 font-medium">
                      🎖 {challenge.coins} coins
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl  lg:text-xl font-semibold text-gray-800 dark:text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-lg text-muted-foreground dark:text-gray-400 py-3">
                    📋 {challenge.questions} questions • ⏱ {challenge.time}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <Badge className="text-sm font-semibold bg-purple-700 text-white px-2 py-1 rounded-full ">
                      {challenge.difficulty}
                    </Badge>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded ">
                      Start Challenge
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam History */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Recent Exams
              </h2>
              <Button
                variant={"link"}
                className="text-indigo-600 hover:underline text-lg"
              >
                View All
              </Button>
            </div>
            <table className="w-full text-sm text-left">
              <thead className="w-full text-sm text-left">
                <tr className="text-gray-600 dark:text-gray-300 border-b">
                  <th className="py-2">Subject</th>
                  <th>Topic</th>
                  <th>Score</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {examHistory.map((exam, index) => (
                  <tr
                    key={index}
                    className="border-b text-gray-700 dark:text-gray-200 font-semibold"
                  >
                    <td className="py-2">{exam.subject}</td>
                    <td>{exam.topic}</td>
                    <td>{exam.score}</td>
                    <td>{exam.date}</td>
                    <td>
                      <Badge
                        className={"bg-indigo-100 text-indigo-700 text-xs"}
                      >
                        {exam.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 space-y-6">
          {/* Subject Performance */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-8 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Subject Performance
            </h2>
            {subjectPerformance.map((subject, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {subject.name}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      subject.percent >= 80
                        ? "text-indigo-600"
                        : subject.percent >= 70
                        ? "text-green-600"
                        : subject.percent >= 60
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {subject.percent}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    style={{ width: `${subject.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <RecentBadges />
          {/* Top Rankings */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Top Rankings
            </h2>
            <div className="space-y-6">
              {rankings.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  {/* Left Side: Iconn + Subject */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {rankingIcons[item.subject] || "🏆"}
                    </span>
                    <span className="text-gray-700 dark:text-white font-medium">
                      {item.subject}
                    </span>
                  </div>
                  {/* Right Side: Rank, Total, Change */}
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded text-sm font-bold">
                      {item.rank}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      of {item.total}
                    </span>
                    <span
                      className={`text-sm ${
                        item.change === "up"
                          ? "text-green-500"
                          : item.change === "down"
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {item.change === "up"
                        ? "↑"
                        : item.change === "down"
                        ? "↓"
                        : "–"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Recommendation */}
      <div className="bg-violet-50   border-2 rounded-xl p-8 text-lg mt-8">
        <div className="flex items-center justify-center">
          <h3 className="font-bold mt-4 mb-4 text-xl md:text-2xl lg:text-2xl">
            Recommended Training Institute
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="font-bold mt-4 mb-4 text-xl md:text-2xl lg:text-2xl">
            TechMasters Academy
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <p className="mt-2 text-muted-foreground text-xl">
            Based on your performance, we recommend additional training in
            JavaScript and SQL. Get 20% off using your ExamPrep coins.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button className="font-semibold text-xl md:font-bold md:text-lg mt-5 p-6 bg-indigo-700 hover:bg-indigo-600">
            Learn More
          </Button>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
