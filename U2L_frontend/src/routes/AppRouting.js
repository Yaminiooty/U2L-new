import { Route, Routes } from "react-router-dom";
import HomeView from "../views/HomeView";
import Dashboard from "../views/DashboardView";
import QualityGates from "../views/QualityGatesView";
import SignInExample from "../views/SigninView";

const AppRouting = () => {
    // let location = useLocation();
  return (
    <Routes>        
    {/* {location.pathname === '/HomeView' && <AppHeader/>} */}
    
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/qualitygates" element={<QualityGates />} />
      <Route path="/signin" element={<SignInExample />} />
      <Route path="/" element={<HomeView />} />

    </Routes>
  );
};

export default AppRouting;
