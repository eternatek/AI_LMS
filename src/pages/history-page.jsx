import { Tabs, TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Clock } from "lucide-react";
import React, { useState } from "react";

const HistoryPage = () => {
  const activityData = [
    {
      title: "Completed learning module",
      description: "Web Development Fundamentals: Module 5",
      date: "2025-04-11",
    },
    {
      title: "Earned badge",
      description: "Speed Solver - Completed exam 30% faster than average",
      date: "2025-04-10",
    },
    {
      title: "Joined community room",
      description: "JavaScript Developers",
      date: "2025-04-08",
    },
    {
      title: "Purchased course",
      description: "Advanced JavaScript Concepts",
      date: "2025-04-05",
    },
    {
      title: "Earned coins",
      description: "+100 coins for 7-day streak",
      date: "2025-04-02",
    },
  ];

  const examData = [
    {
      subject: "JavaScript",
      topic: "Functions & Closures",
      score: 85,
      status: "passed",
      questions: "21/25",
      time: "18 min",
      date: "2025-04-12",
    },
    {
      subject: "SQL",
      topic: "Advanced Joins",
      score: 92,
      status: "passed",
      questions: "28/30",
      time: "25 min",
      date: "2025-04-10",
    },
    {
      subject: "Communication Skills",
      topic: "Professional Emails",
      score: 64,
      status: "passed",
      questions: "13/20",
      time: "15 min",
      date: "2025-04-05",
    },
    {
      subject: "Python",
      topic: "Data Structures",
      score: 54,
      status: "failed",
      questions: "14/25",
      time: "22 min",
      date: "2025-04-03",
    },
    {
      subject: "React",
      topic: "Hooks",
      score: 88,
      status: "passed",
      questions: "22/25",
      time: "20 min",
      date: "2025-04-01",
    },
    {
      subject: "Problem Solving",
      topic: "Critical Thinking",
      score: 76,
      status: "passed",
      questions: "11/15",
      time: "18 min",
      date: "2025-03-28",
    },
    {
      subject: "MongoDB",
      topic: "Aggregation Framework",
      score: 45,
      status: "failed",
      questions: "9/20",
      time: "25 min",
      date: "2025-03-25",
    },
  ];
  const [tab, setTab] = useState("exam");
  const subjectPerformance = examData.slice(0, 5).map((e) => ({
    subject: e.subject,
    score: e.score,
  }));

  const passed = examData.filter((e) => e.status === "passed").length;
  const failed = examData.length - passed;
  const avgScore =
    examData.reduce((sum, e) => sum + e.score, 0) / examData.length;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-1">History</h2>
      <p className="text-muted-foreground text-xl mb-6">
        Track your learning journey and activities
      </p>
      <div className="mb-4">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="bg-gray-100">
            <TabsTrigger value="exam" className="px-6 py-2">
              Exam History
            </TabsTrigger>
            <TabsTrigger value="activity" className="px-6 py-2">
              Activity Log
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {tab === "exam" && (
        <>
          <div className="overflow-auto bg-white rounded-xl shadow-2xl p-4">
            <table className="w-full text-left">
              <thead className="text-gray-500 text-sm">
                <tr>
                  <th className="py-2">Subject & Topic</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Questions</th>
                  <th>Time</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {examData.map((e, index) => (
                  <tr className="border-t text-lg" key={index}>
                    <td className="py-3">
                      <div className="font-semibold text-lg">{e.subject}</div>
                      <div className="text-md text-gray-500">{e.topic}</div>
                    </td>
                    <td>{e.score}%</td>
                    <td>
                      <span
                        className={`px-4 py-1 font-semibold text-md rounded-full ${
                          e.status === "passed"
                            ? "bg-green-700 text-white"
                            : "bg-red-700 text-white"
                        }`}
                      >
                        {e.status}
                      </span>
                    </td>
                    <td className="text-blue-600">{e.questions}</td>
                    <td className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {e.time}
                    </td>
                    <td>{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-6 max-w-7xl">
            <div className="rounded-2xl bg-white shadow p-4">
              <h3 className="font-bold text-xl mb-2">
                Subject Performance
              </h3>
              <ul className="space-y-1 text-lg font-medium">
                {subjectPerformance.map((s, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{s.subject}</span>
                    <span>{s.score}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow p-4">
              <h3 className="font-bold text-xl mb-2">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="text-xl font-bold">{examData.length}</div>
                  <div className="text-lg text-gray-600">Total Exams</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="text-xl font-bold">
                    {avgScore.toFixed(0)}%
                  </div>
                  <div className="text-lg text-gray-600">Avg. Score</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="text-xl font-bold">{passed}</div>
                  <div className="text-lg text-gray-600">Passed</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="text-xl font-bold">{failed}</div>
                  <div className="text-lg text-gray-600">Failed</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {tab === "activity" && (
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-xl mb-4">Activity History</h3>
          <ul className="relative border-l-2 border-gray-200 pl-4 space-y-6">
            {activityData.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-600 rounded-full"></span>
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
                <div className="text-xs text-gray-400">{item.date}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
