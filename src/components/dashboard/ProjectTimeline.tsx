const phases = [
  { id: 1, name: "Kickoff Workshop", date: "Mar 17", status: "completed" },
  { id: 2, name: "Data Collection", date: "March 18", status: "completed" },
  { id: 3, name: "Initial Phase", date: "May 8", status: "upcoming" },
  { id: 4, name: "Verification", date: "May 9–July 12", status: "upcoming" },
  { id: 5, name: "Completion Reviews", date: "July 13", status: "upcoming" },
  { id: 6, name: "Cycle Conclusion", date: "August 21", status: "upcoming" },
];

export const ProjectTimeline = () => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-[#E0E8ED] w-full">
      {/* Header with Year Selector */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-[#1D3557] text-base">
          Project Timeline
        </h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#1D3557] bg-white border border-[#E0E8ED] rounded-lg hover:bg-[#F5F8FA] transition-colors">
          2026
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="#8597A8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Timeline */}
      <div className="relative pt-3 pb-16">
        {/* Progress Bar - 14px height as per Figma */}
        <div className="absolute top-[8px] left-0 right-0 h-[14px] flex items-center rounded-full overflow-hidden">
          <div className="w-full flex h-full  bg-[#E0E8ED]">
            {/* Green completed section - connects first 2 phases (20% to cover both) */}
            <div
              className="h-full bg-[#10B981] rounded-full"
              style={{ width: "28%" }}
            ></div>
            {/* Gray remaining section */}
            <div className="h-full bg-[#E0E8ED] rounded-r-full flex-1"></div>
          </div>
        </div>

        {/* Phases - positioned at top-[10px] to center 10px dots on 14px bar (bar at 8px-22px, center at 15px) */}
        <div className="absolute top-[10px] left-0 right-0 z-10 flex justify-between">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="flex flex-col items-center text-center"
              style={{ width: "140px" }}
            >
              {/* Milestone Dot - 10×10px, white on green section, red on gray section */}
              <div
                className={`w-[10px] h-[10px] rounded-full mb-3 ${
                  phase.status === "completed" ? "bg-white" : "bg-[#DB1F26]"
                }`}
              ></div>

              {/* Date */}
              <p className="text-xs text-[#8597A8] mb-2 whitespace-nowrap">
                {phase.date}
              </p>

              {/* Phase Name - hidden on smaller screens (< 1024px) */}
              <h4 className="text-sm font-medium text-[#1D3557] leading-tight hidden lg:block">
                {phase.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
