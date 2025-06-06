import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const discussions = [
  {
    name: "Alex Johnson",
    avatar: "AJ",
    time: "2 hours ago",
    question: "Can someone explain the difference between let and var in JavaScript? I'm still confused about scope and hoisting.",
    tags: ["#javascript", "#basics"],
    likes: 24,
    comments: 15,
  },
  {
    name: "Priya Sharma",
    avatar: "PS",
    time: "1 hour ago",
    question: "What’s the best way to prepare for SQL interview questions? Are subqueries important?",
    tags: ["#sql", "#interview"],
    likes: 18,
    comments: 9,
  },
  {
    name: "John Lee",
    avatar: "JL",
    time: "4 hours ago",
    question: "Struggling with Python list comprehensions. Can anyone break them down simply?",
    tags: ["#python", "#help"],
    likes: 33,
    comments: 21,
  },
  {
    name: "Fatima Noor",
    avatar: "FN",
    time: "5 minutes ago",
    question: "Any tips on improving soft skills for technical interviews? I tend to freeze when explaining things.",
    tags: ["#softskills", "#career"],
    likes: 12,
    comments: 4,
  },
  {
    name: "Carlos Diaz",
    avatar: "CD",
    time: "3 days ago",
    question: "How do foreign keys work in SQL exactly? I keep getting constraint errors.",
    tags: ["#sql", "#basics"],
    likes: 9,
    comments: 5,
  },
  {
    name: "Emily Zhang",
    avatar: "EZ",
    time: "2 days ago",
    question: "Should I learn JavaScript or Python first if I want to become a data analyst?",
    tags: ["#career", "#python", "#javascript"],
    likes: 27,
    comments: 13,
  },
  {
    name: "Mohammed Ali",
    avatar: "MA",
    time: "6 hours ago",
    question: "Is it worth doing a certification course for backend development? Any recommendations?",
    tags: ["#certification", "#career"],
    likes: 22,
    comments: 10,
  },
];

const Community = () => {
  return (
    <div className="px-4 md:px-8 py-6 min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-2">Community</h2>
      <p className="text-gray-500 mb-6">Connect, learn, and grow with fellow learners</p>

      <Tabs defaultValue="discussions" className="w-full">
        <TabsList className="flex gap-2 mb-4">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="study-rooms">Study Rooms</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section: Post + Discussions */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Create Post */}
              <div className="bg-white border rounded-lg shadow p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">YA</div>
                  <Input
                    type="text"
                    placeholder="Ask or share something with the community..."
                    className="flex-1 border p-2"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button className="bg-blue-600 text-white font-medium">New Post</Button>
                  <Button className="bg-blue-600 text-white font-medium">Post</Button>
                </div>
              </div>

              {/* Discussions */}
              <div>
                <h3 className="font-semibold mb-4">Recent Discussions</h3>
                {discussions.map((d, i) => (
                  <div key={i} className="bg-white border p-4 rounded-lg shadow-sm mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center font-bold">
                        {d.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{d.name}</div>
                        <div className="text-sm text-gray-500">{d.time}</div>
                      </div>
                    </div>
                    <p className="mb-2">{d.question}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-gray-500 text-sm">
                      <span>❤️ {d.likes}</span>
                      <span>💬 {d.comments}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-[300px] space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold mb-3">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "#javascript",
                    "#python",
                    "#sql",
                    "#interview",
                    "#career",
                    "#softskills",
                    "#help",
                    "#certification",
                  ].map((tag) => (
                    <span key={tag} className="bg-gray-200 text-sm px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold mb-3">Community Guidelines</h4>
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                  <li>Be respectful and inclusive</li>
                  <li>No spam or self-promotion</li>
                  <li>Use appropriate channels for your questions</li>
                  <li>Provide context when asking questions</li>
                  <li>Help others when you can</li>
                </ol>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="study-rooms">
          <div className="text-muted-foreground text-center p-6">Study Rooms UI coming soon.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
