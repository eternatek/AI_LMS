import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart as BarChartIcon, LineChart as LineChartIcon } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const scoreData = [
  { month: 'Jan', JavaScript: 60, Python: 45, SQL: 60, Communication: 78 },
  { month: 'Feb', JavaScript: 70, Python: 50, SQL: 72, Communication: 80 },
  { month: 'Mar', JavaScript: 75, Python: 55, SQL: 70, Communication: 82 },
  { month: 'Apr', JavaScript: 85, Python: 52, SQL: 68, Communication: 90 }
];

const studyTime = [
  { day: 'Mon', hours: 1.2 },
  { day: 'Tue', hours: 0.7 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 1.9 },
  { day: 'Fri', hours: 1.1 },
  { day: 'Sat', hours: 2.3 },
  { day: 'Sun', hours: 0.6 }
];

const strengths = ["SQL", "JavaScript", "React", "Problem Solving"];
const weaknesses = ["Python", "MongoDB", "Communication"];

const Analytics = () => {
  const [tab, setTab] = useState("performance");

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-2">Analytics</h2>
      <p className="text-md text-muted-foreground mb-4">Track your progress and identify areas for improvement</p>

      <Tabs defaultValue="performance" value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="strengths">Strengths</TabsTrigger>
          <TabsTrigger value="areas">Areas to Improve</TabsTrigger>
        </TabsList>

        {/* Performance Tab */}
        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Score Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={scoreData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="JavaScript" stroke="#3b82f6" />
                    <Line type="monotone" dataKey="Python" stroke="#10b981" />
                    <Line type="monotone" dataKey="SQL" stroke="#f59e0b" />
                    <Line type="monotone" dataKey="Communication" stroke="#8b5cf6" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Study Time Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={studyTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm mt-2">Total study time this week: <strong>9.3 hours</strong></p>
              </CardContent>
            </Card>
          </div>
          <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8'>
 <Card>
    <CardContent className="p-4">
      <div className="text-sm text-green-600 font-semibold flex items-center gap-1">
        <span>🟢 Most Improved</span>
      </div>
      <h4 className="text-lg font-bold mt-2">JavaScript</h4>
      <p className="text-2xl text-green-500 font-bold mt-1">+20% ⬆</p>
      <p className="text-sm text-muted-foreground mt-1">Improved from 65% to 85% in 3 months</p>
    </CardContent>
  </Card>
   <Card>
    <CardContent className="p-4">
      <div className="text-sm text-yellow-600 font-semibold flex items-center gap-1">
        <span>🏅 Highest Score</span>
      </div>
      <h4 className="text-lg font-bold mt-2">SQL</h4>
      <p className="text-2xl text-purple-600 font-bold mt-1">92%</p>
      <p className="text-sm text-muted-foreground mt-1">Consistently high performance</p>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="p-4">
      <div className="text-sm text-blue-600 font-semibold flex items-center gap-1">
        <span>📊 Average Score</span>
      </div>
      <h4 className="text-2xl text-blue-700 font-bold mt-2">71%</h4>
      <p className="text-sm text-muted-foreground">Across all subjects and exams</p>
      <a href="#" className="text-sm text-indigo-600 mt-2 inline-block hover:underline">
        See detailed breakdown →
      </a>
    </CardContent>
  </Card>
          </div>
        </TabsContent>

        {/* Strengths Tab */}
        <TabsContent value="strengths">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Your Strongest Areas</h3>
                <ul className="space-y-2">
                  {strengths.map(skill => (
                    <li key={skill} className="bg-green-100 px-4 py-2 rounded-md">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Recommended Actions</h3>
                <div className="text-sm">Share Your Knowledge: Your SQL skills are exceptional. Help others improve theirs.</div>
                <div className="text-sm">Take Advanced Courses: With strong JavaScript skills, you're ready for advanced concepts.</div>
                <div className="text-sm">Become a Mentor: Your consistent performance makes you a great mentor candidate.</div>
                <div className="text-sm">Participate in Challenges: Leverage your problem-solving skills in weekly challenges.</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Areas to Improve Tab */}
        <TabsContent value="areas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Areas Needing Improvement</h3>
                <ul className="space-y-2">
                  {weaknesses.map(skill => (
                    <li key={skill} className="bg-red-100 px-4 py-2 rounded-md">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Improvement Plan</h3>
                <div className="text-sm">Python Skills: Start with Python Fundamentals to improve your foundation.</div>
                <div className="text-sm">MongoDB Knowledge: Take MongoDB Essentials tests and tutorials.</div>
                <div className="text-sm">Communication Skills: Practice professional email writing and communication workshops.</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
