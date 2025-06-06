import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import GraduationDashBoardPage from "@/pages/graduationdashboardpage"
import MainLayout from "./layout/MainLayout"
import { ThemeProvider } from "./components/ui/ThemeProvider"
import HomePage from "./pages/homepage"
import LearningPath from "./pages/learningpath"
import Analytics from "./pages/analytics-page"
import Leaderboard from "./pages/leaderboard-page"
import StorePage from "./pages/store-page"
import Community from "./pages/community-page"
import HistoryPage from "./pages/history-page"
import RewardsSection from "./pages/reward-page"
import ExamPage from "./pages/exam-page"

function App() {
 

  return (
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}></Route> 
     <Route path="/graduation-dashboard" element={<GraduationDashBoardPage/>}></Route>
     <Route path="/learning"  element={<LearningPath/>}></Route>
     <Route path="/analytics" element={<Analytics/>}></Route>
      <Route path="/leaderboard" element={<Leaderboard/>}></Route>
      <Route path="/store" element={<StorePage/>}></Route>
      <Route path="/community" element={<Community/>}></Route>
     <Route path="/history" element={<HistoryPage/>}></Route>
     <Route path="/rewards" element={<RewardsSection/>}></Route>
     <Route path="exam" element={<ExamPage/>}></Route>
     </Route> 
      </Routes>
      </Router> 
    </ThemeProvider>
  )
}

export default App
