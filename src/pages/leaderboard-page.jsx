import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Leaderboard = () => {
  return (
    <div className="flex flex-col min-h-screen p-6 gap-6">
      {/* Main leader board section */}
      <div className=" w-full space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Leaderboard</h2>
            <p className="text-lg text-muted-foreground mt-4">
              See where you stand among other learners
            </p>
          </div>{" "}
          <Select>
            <SelectTrigger className="w-72 h-20">
              <SelectValue placeholder="Communication" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="communication">Communication</SelectItem>
              <SelectItem value="problem-solving">Problem Solving</SelectItem>
              <SelectItem value="collaboration">Collaboration</SelectItem>
              <SelectItem value="development">Web-development</SelectItem>
              <SelectItem value="ai-ml">Machine Learning</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Tab Section   */}
      <div className="lg-w-1/2">
        <Tabs defaultValue="overall" orientaion="vertical" className="w-full ">
          <TabsList className="flex flex-row gap-2">
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="coding">Coding</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Leaderboard section */}
      <div className="flex justify-center gap-8 items-end">
        <TopLeaderCard
          name="Taylor Miller"
          initials="DH"
          points={961}
          color="bg-purple-600"
          medal="🥈"
        />
        <TopLeaderCard
          name="Casey Wilson"
          initials="OU"
          points={821}
          color="bg-red-500"
          medal="🥇"
          main
        />
        <TopLeaderCard
          name="Kendall Rodriguez"
          initials="VZ"
          points={993}
          color="bg-yellow-500"
          medal="🥉"
        />
      </div>
      <Card>
        <CardContent className={"overflow-x-auto p-4"}>
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 font-semibold text-gray-700">
              <tr>
                <th className="p-2">Rank</th>
                <th className="p-2">User</th>
                <th className="p-2">Score</th>
                <th className="p-2">Exams</th>
                <th className="p-2">Country</th>
                <th className="p-2">Badges</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Casey Wilson",
                  initials: "OU",
                  score: 821,
                  exams: 19,
                  country: "🇫🇷 FR",
                  badges: 14,
                },
                {
                  name: "Taylor Miller",
                  initials: "DH",
                  score: 961,
                  exams: 17,
                  country: "🇺🇸 US",
                  badges: 8,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
                {
                  name: "Kendall Rodriguez",
                  initials: "VZ",
                  score: 993,
                  exams: 44,
                  country: "🇲🇽 MX",
                  badges: 14,
                },
              ].map((user, index) => (
                <tr key={user.name} className="border-b hover:bg-gray-50">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-600 text-white font-bold">
                      {user.initials}
                    </div>
                    {user.name}
                  </td>
                  <td className="p-2">{user.score}</td>
                  <td className="p-2">{user.exams}</td>
                  <td className="p-2">{user.country}</td>
                  <td className="p-2">🏅 {user.badges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
function TopLeaderCard({ name, initials, points, color, medal, main = false }) {
  return (
    <div className={`text-center ${main ? "scale-110" : ""}`}>
      <div
        className={`w-20 h-20 rounded-full ${color} text-white flex items-center justify-center text-xl font-bold mx-auto`}
      >
        {initials}
      </div>

      <p className="font-semibold mt-1">{name}</p>
      <p className="text-sm text-muted-foreground">{points} points</p>
      <p className="text-lg">{medal}</p>
    </div>
  );
}
