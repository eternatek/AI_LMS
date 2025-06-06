import { Button } from "@/components/ui/button";
import RewardsTab from "@/components/ui/rewardTabs";
import { Share2 } from "lucide-react";
import React from "react";

const RewardsSection = () => {
  return (
    <div className="p-6 space-y-4">
      <h3 className="font-bold text-4xl">Rewards</h3>
      <p className="text-muted-foreground text-xl">
        {" "}
        Track your achievements and earn rewards
      </p>
      {/* --- Upper Section --- */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Your Rewards */}
        <div className="flex-1 bg-white border-yellow-200 border-2 p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">🎁 Your Rewards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-4">
            <div className="bg-blue-100 text-blue-700 border-2 border-blue-600 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold">2,540</div>
              <div className="text-lg font-medium">Total Coins</div>
            </div>
            <div className="bg-purple-100 text-purple-700 border-2 border-purple-600 p-4 rounded-xl text-center">
              <div className="text-4xl font-bold">12</div>
              <div className="text-lg font-medium">Badges Earned</div>
            </div>
            <div className="bg-green-100 text-green-700 border-2  border-green-700 p-4 rounded-xl text-center">
              <div className="text-4xl font-bold">3/6</div>
              <div className="text-lg font-medium">Achievements</div>
            </div>
            <div className="rounded-xl border-2 bg-gray-10 p-6 w-full shadow-sm col-span-full mx-auto mt-4 ">
              <div className="flex-1">
                <h3 className="font-bold text-2xl">Refer a Friend</h3>
                <p className="text-lg text-muted-foreground">
                  Share ExamPrep with friends and earn coins
                </p>
                <p className="mt-1 font-medium text-base text-gray-800">
                  Earn 500 coins for each referral
                </p>
                <p className="text-xl text-gray-500">
                  When your friend joins and completes their first exam
                </p>
              </div>
              <div className=" text-blue-600 flex flex-row gap-4 items-center justify-center  mt-4">
                <div className="w-15 h-15 flex items-center justify-center bg-blue-300 hover:bg-blue-400 text-blue-700 rounded-full ">
                  <Share2 />
                </div>
                <div>
                  <Button className="bg-green-500 font-semibold text-lg p-6 hover:bg-blue-600">
                    Share Referral Link
                  </Button>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xl mt-3 mb-3">Recent Activities</h3>
            <div className="rounded-xl  bg-gray-100 p-6 w-full shadow-sm col-span-full mx-auto mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">🏅</span>
                  <div>
                    <h3 className="font-bold tex-base text-xl">
                      Earned "Speed Solver" Badge
                    </h3>
                    <p className="text-muted-foreground text-lg mt-1">
                      Apr 10, 2025
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-violet-600 text-white text-lg font-medium px-4 py-1">
                  +100 coins
                </span>
              </div>
            </div>
              <div className="rounded-xl  bg-gray-100 p-6 w-full shadow-sm col-span-full mx-auto mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">🏅</span>
                  <div>
                    <h3 className="font-bold tex-base text-xl">
                    7-Day Login Streak
                    </h3>
                    <p className="text-muted-foreground text-lg mt-1">
                     Apr 5, 2025
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-violet-600 text-white text-lg font-medium px-4 py-1">
                  +75 coins
                </span>
              </div>
            </div>
              <div className="rounded-xl  bg-gray-100 p-6 w-full shadow-sm col-span-full mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">🏆</span>
                  <div>
                    <h3 className="font-bold tex-base text-xl">
                     Top 5% in JavaScript Leaderboard
                    </h3>
                    <p className="text-muted-foreground text-lg mt-1">
                     Apr 8, 2025
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-violet-600 text-white text-lg font-medium px-4 py-1">
                  +250 coins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Daily Challenge */}
        <div className="w-full lg:w-80 bg-white border p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">🎯 Daily Challenge</h2>
          <div className="text-lg font-semibold mb-3">
            Today's Progress: <strong>2/3</strong>
          </div>
          <div className="bg-purple-100 h-2 rounded-full mb-4">
            <div className="bg-purple-600 h-2 rounded-full w-2/3"></div>
          </div>
          <ul className="space-y-3 text-xl font-medium">
            <li className="flex justify-between items-center">
              <span>✅ Complete one quiz</span>
              <span className="text-green-600 font-semibold">+25 coins</span>
            </li>
            <li className="flex justify-between items-center">
              <span>✅ Participate in discussion</span>
              <span className="text-green-600 font-semibold">+25 coins</span>
            </li>
            <li className="flex justify-between items-center text-gray-500">
              <span>◻️ Study 30 minutes</span>
              <span className="text-gray-400 font-semibold">+50 coins</span>
            </li>
          </ul>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold text-xl">
            Start Studying
          </button>
        </div>
      </div>

      {/* --- Lower Section --- */}
      <RewardsTab />
    </div>
  );
};
export default RewardsSection;
