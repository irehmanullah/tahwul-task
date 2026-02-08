import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import tasksIcon from "../../assets/tasks.svg";
import documentsIcon from "../../assets/documents.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import perspectivesIcon from "../../assets/perspectives.svg";
import reportsIcon from "../../assets/reports.svg";
import usersIcon from "../../assets/users.svg";
import mainLogo from "../../assets/main-logo.svg";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: dashboardIcon, path: "/" },
  {
    label: "Perspectives",
    icon: perspectivesIcon,
    path: "/perspectives",
  },
  { label: "Tasks", icon: tasksIcon, path: "/tasks" },
  { label: "Documents", icon: documentsIcon, path: "/documents" },
  { label: "Reports", icon: reportsIcon, path: "/reports" },
  { label: "Users & Roles", icon: usersIcon, path: "/users" },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const Sidebar = ({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) => {
  return (
    <aside
      className={cn(
        "bg-brand-primary text-white flex flex-col transition-all duration-300 z-40",
        // Mobile styles: fixed, slide-in drawer
        "fixed inset-y-0 left-0 h-full w-64 shadow-xl transform lg:transform-none lg:shadow-none",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        // Desktop styles: sticky, collapsible
        "lg:sticky lg:top-0 lg:h-screen",
        isCollapsed ? "lg:w-20" : "lg:w-64",
      )}
    >
      {/* Brand Logo / Menu Icon with Toggle Button */}
      <div className="h-16 flex items-center border-b border-gray-700/50 overflow-visible transition-all duration-300 relative">
        {isCollapsed ? (
          // Menu icon when collapsed (Desktop only)
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center p-3 hover:bg-white/5 transition-colors hidden lg:flex"
            aria-label="Expand Sidebar"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        ) : (
          // Logo and floating collapse button when expanded
          <>
            <div className="w-full flex items-center px-3">
              <img
                src={mainLogo}
                alt="Tahwul Brand"
                className="w-[100px] h-[40px] object-contain"
              />
            </div>
            {/* Floating collapse button (Desktop) */}
            <button
              onClick={onToggle}
              className="absolute top-3 -right-4 p-2 bg-white rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-all z-50 hidden lg:block"
              aria-label="Collapse Sidebar"
            >
              <img src={arrowLeftIcon} alt="Collapse" className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "flex-1 py-6 px-3 space-y-1",
          isCollapsed ? "overflow-visible" : "overflow-y-auto",
        )}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
              // Close sidebar on mobile when navigating
              if (window.innerWidth < 1024 && onMobileClose) {
                onMobileClose();
              }
            }}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group relative",
                isActive
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:bg-white/5 hover:text-white",
              )
            }
          >
            <img
              src={item.icon as string}
              alt={item.label}
              className="w-5 h-5 min-w-5 shrink-0"
            />
            {/* Show label if NOT collapsed OR if on mobile (since mobile is always expanded width) */}
            {(!isCollapsed || isMobileOpen ? true : false) && (
              <span className="overflow-hidden whitespace-nowrap animate-in fade-in duration-300 lg:block">
                {/* On desktop, hide if collapsed. On mobile, always show. */}
                {/* Actually, styling logic: */}
                {/* If mobile: always show text (w-64) */}
                {/* If desktop: show if !isCollapsed */}
                <span className={cn("block", isCollapsed && "lg:hidden")}>
                  {item.label}
                </span>
              </span>
            )}

            {/* Tooltip for collapsed state (Desktop only) */}
            {isCollapsed && (
              <div className="hidden lg:block absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
