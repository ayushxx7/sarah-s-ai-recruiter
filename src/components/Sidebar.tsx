import { 
  LayoutDashboard, 
  Inbox, 
  Calendar, 
  Users, 
  Settings,
  Briefcase
} from "lucide-react";

interface SidebarProps {
  activeView: "dashboard" | "candidate" | "upload";
  onNavigate: (view: "dashboard" | "upload") => void;
}

import { Upload } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", view: "dashboard" as const },
  { icon: Upload, label: "Upload & Analyze", view: "upload" as const },
  { icon: Inbox, label: "Inbox", badge: 12 },
  { icon: Calendar, label: "Calendar Agent" },
  { icon: Users, label: "Candidates" },
  { icon: Settings, label: "Settings" },
];

const activeRoles = [
  { title: "Senior Frontend Eng", newCount: 24 },
  { title: "Product Manager", newCount: 8 },
];

export function Sidebar({ activeView, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-primary">Recruit-AI</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => item.view && onNavigate(item.view)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.view === activeView
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Active Roles Section */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Active Roles
          </h3>
          <ul className="space-y-1">
            {activeRoles.map((role) => (
              <li key={role.title}>
                <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4" />
                    <span className="truncate">{role.title}</span>
                  </div>
                  <span className="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded-full">
                    {role.newCount} New
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">S</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Sarah</p>
            <p className="text-xs text-muted-foreground">Founder</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
