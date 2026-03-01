import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Dumbbell,
  BarChart3,
  UtensilsCrossed,
  Timer,
  Trophy,
  Heart,
  Zap,
  LogOut,
} from "lucide-react";
import SidebarNavLink from "./SidebarNavLink";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/workouts", icon: Dumbbell, label: "Workouts" },
  { to: "/progress", icon: BarChart3, label: "Progress" },
  { to: "/meals", icon: UtensilsCrossed, label: "Meals" },
  { to: "/timer", icon: Timer, label: "Timer" },
  { to: "/programs", icon: Trophy, label: "Programs" },
];

const AppLayout = ({ userName, onLogout }: { userName?: string; onLogout?: () => void }) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-16 lg:w-64 border-r border-border bg-sidebar flex flex-col">
        <div className="flex items-center gap-3 px-4 py-6 border-b border-border">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden lg:block">
            <h1 className="font-display text-lg font-bold text-foreground">FitPulse</h1>
            <p className="text-xs text-muted-foreground">Home Workout</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-3 mt-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} {...item} />
          ))}
        </nav>

        <div className="p-3 border-t border-border space-y-2">
          <SidebarNavLink to="/recovery" icon={Heart} label="Recovery" />
          <Button
            variant="ghost"
            onClick={onLogout}
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive px-3"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden lg:inline">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-16 lg:ml-64">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
