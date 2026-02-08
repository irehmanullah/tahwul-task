import React from "react";
import userDemo from "../../assets/user-demo.png";

interface Leader {
  name: string;
  perspective: string;
  percentage: number;
}

const leaders: Leader[] = [
  {
    name: "Ahmed Al-Ali",
    perspective: "Strategy Perspective",
    percentage: 96,
  },
  {
    name: "Sarah Al-Khaled",
    perspective: "Beneficiary Perspective",
    percentage: 94,
  },
  {
    name: "Mohammad Al-Mansour",
    perspective: "IT Perspective",
    percentage: 92,
  },
];

export const TopPerformers: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-figma-border shadow-sm h-full flex flex-col">
      <h3 className="font-semibold text-figma-textPrimary mb-6">
        Top Performing Perspective Leaders
      </h3>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <ul className="space-y-6">
          {leaders.map((leader, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-4 ${
                idx !== leaders.length - 1
                  ? "border-b border-figma-border pb-6"
                  : ""
              }`}
            >
              {/* Avatar */}
              <img
                src={userDemo}
                alt={leader.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-figma-textPrimary text-base truncate">
                  {leader.name}
                </div>
                <div className="text-sm text-figma-textSecondary truncate">
                  {leader.perspective}
                </div>
              </div>

              {/* Percentage */}
              <div className="flex-shrink-0 text-right">
                <div className="text-lg font-bold text-figma-textPrimary">
                  {leader.percentage}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
