import { BrowserRouter, Routes, Route  } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import HomeScreen from "./pages/HomeScreen";
import ClubMatches from "./pages/ClubMatches";
import ClubPlayers from "./pages/ClubPlayers";
import ProfileScreen from "./pages/ProfileScreen";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="relative flex-row justify-center content-center bg-slate-900 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomeScreen />}/>
            <Route path="club/matches" element={<ClubMatches />}/>
            <Route path="club/players" element={<ClubPlayers />}/>
            <Route path="profile" element={<ProfileScreen />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
