import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import LoginScreen from "./components/LoginScreen";
import Index from "./pages/Index";
import Workouts from "./pages/Workouts";
import WorkoutDetail from "./pages/WorkoutDetail";
import Progress from "./pages/Progress";
import Meals from "./pages/Meals";
import TimerPage from "./pages/Timer";
import Programs from "./pages/Programs";
import Recovery from "./pages/Recovery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("fitpulse_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (name: string, email: string) => {
    const userData = { name, email };
    localStorage.setItem("fitpulse_user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("fitpulse_user");
    setUser(null);
  };

  if (!user) return <LoginScreen onLogin={handleLogin} />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout userName={user.name} onLogout={handleLogout} />}>
              <Route path="/" element={<Index userName={user.name} />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/workouts/:id" element={<WorkoutDetail />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/meals" element={<Meals />} />
              <Route path="/timer" element={<TimerPage />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/recovery" element={<Recovery />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
