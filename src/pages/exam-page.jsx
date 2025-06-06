import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ExamPage = () => {
  return (
    <div className="p-6 space-y-4">
      <div>
        <h3 className="font-bold text-3xl">Take an Exam</h3>
        <p className="text-muted-foreground text-xl mt-1">
          Choose a category to start a new assessment
        </p>
      </div>
      {/* Exam Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Technical Skills",
            exams: 125,
            color: "bg-gradient-to-r from-blue-600 to-cyan-500",
            icon: "💻",
          },
          {
            title: "Soft Skills",
            exams: 84,
            color: "bg-gradient-to-r from-fuchsia-600 to-pink-500",
            icon: "📖",
          },
          {
            title: "Aptitude & Reasoning",
            exams: 62,
            color: "bg-gradient-to-r from-orange-500 to-yellow-500",
            icon: "🧠",
          },
          {
            title: "Coding Practice",
            exams: 98,
            color: "bg-gradient-to-r from-green-600 to-emerald-400",
            icon: "💡",
          },
        ].map(({ title, exams, color, icon }) => (
          <div
            className="rounded-xl border shadow-sm overfow-hidden"
            key={title}
          >
            <div
              className={`${color} text-white rounded-t-xl p-4 flex items-center justify-between`}
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-lg font-medium">{exams} exams</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-lg text-muted-foreground mt-1">
                {title === "Technical Skills" &&
                  "Programming languages, databases, data structures, and more."}
                {title === "Soft Skills" &&
                  "Communication, leadership, problem-solving, and adaptability."}
                {title === "Aptitude & Reasoning" &&
                  "Logical reasoning, numerical aptitude, and verbal ability."}
                {title === "Coding Practice" &&
                  "Solve coding challenges in your preferred programming language."}
              </p>
              <Link href={`/exam/start`}>
                {" "}
                <button className="mt-4 text-lg font-medium flex items-center text-blue-600 hover:underline">
                  {" "}
                  Start <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Recent Focus Areas */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Your Recent Focus Areas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 border bg-gray-100 p-5 rounded-xl">
          {[
            { subject: "JavaScript", date: "3 days ago", mastery: "85%" },
            {
              subject: "Communication Skills",
              date: "1 week ago",
              mastery: "64%",
            },
            { subject: "SQL", date: "2 days ago", mastery: "92%" },
          ].map(({ subject, date, mastery }) => (
            <div className="bg-white rounded-xl border-gray-300 p-4 shadow-sm">
              <h4 className="font-medium  text-lg">{subject}</h4>
              <p className="text-medium text-gray-500">Last attempt: {date}</p>
              <p className="text-lg text-violet-600 mt-2 font-medium">
                {mastery} mastery
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Personalized Recommendation */}
      <div className="bg-blue-100  border border-blue-300 rounded-xl p-4 text-sm mt-8">
        <h3 className="font-semibold text-blue-800 flex items-center gap-2 text-xl">
          🧠 Personalized Exam Recommendation
        </h3>
        <p className="mt-1 text-blue-700 text-lg">
          Based on your recent activity, we recommend taking the{" "}
          <span className="font-semibold">"Advanced JavaScript Functions"</span>{" "}
          exam to improve your skills.
        </p>
      </div>
    </div>
  );
};

export default ExamPage;
