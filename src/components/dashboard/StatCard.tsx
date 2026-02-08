import { cn } from "../../lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string; // Changed to string for SVG path
  className?: string;
}

export const StatCard = ({ label, value, icon, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[10px] border border-[#E0E8ED]",
        "h-[80px] p-4 w-full",
        "flex flex-col justify-between",
        className,
      )}
    >
      {/* Value and Icon Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-[#1D3557] text-2xl font-bold leading-none">
          {value}
        </h3>
        <img src={icon} alt={label} className="w-6 h-6" />
      </div>

      {/* Label */}
      <p className="text-[#8597A8] text-xs font-normal">{label}</p>
    </div>
  );
};
