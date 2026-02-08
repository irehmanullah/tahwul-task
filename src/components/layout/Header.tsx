import { Bell, ChevronDown, Menu } from "lucide-react";
import searchIcon from "../../assets/search.svg";
import userDemo from "../../assets/user-demo.png";

interface HeaderProps {
  onMobileToggle: () => void;
}

export const Header = ({ onMobileToggle }: HeaderProps) => {
  return (
    <header className="h-[60px] bg-white border-b border-[#E0E8ED] flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onMobileToggle}
          className="lg:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search - Exact Figma specs: 314px × 34px */}
        <div className="hidden sm:block relative w-[314px] h-[34px]">
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pl-10 pr-4 bg-white border border-[#E0E8ED] rounded-lg text-sm text-[#8597A8] placeholder:text-[#8597A8] focus:outline-none focus:ring-1 focus:ring-[#E0E8ED] transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-[#8597A8] hover:bg-[#F5F8FA] rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#DB1F26] rounded-full border-2 border-white"></span>
        </button>

        {/* User Profile - Exact Figma specs: 128px × 32px, #F9FAFA bg, 30px radius */}
        <button className="flex items-center gap-2 h-[32px] w-[128px] bg-[#F9FAFA] rounded-[30px] px-2 hover:bg-[#F0F2F4] transition-colors">
          <img
            src={userDemo}
            alt="Mohamed"
            className="w-6 h-6 rounded-full object-cover flex-shrink-0"
          />
          <div className="text-left flex-1 min-w-0">
            <p className="text-xs font-medium text-[#1D3557] leading-none truncate">
              Mohamed
            </p>
          </div>
          <ChevronDown className="w-3 h-3 text-[#8597A8] flex-shrink-0" />
        </button>
      </div>
    </header>
  );
};
