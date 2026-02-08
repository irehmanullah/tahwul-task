import React from "react";

type MetricStatus =
  | "not-started"
  | "in-progress"
  | "completed"
  | "partial"
  | "full"
  | "delayed";

interface Badge {
  number: number;
  status: MetricStatus;
}

interface Criterion {
  name: string;
  badges: Badge[];
  layout?: 2 | 3; // Number of columns for badge layout
}

interface Perspective {
  name: string;
  percentage: string;
  criteria: Criterion[];
}

const statusColors: Record<MetricStatus, string> = {
  "not-started": "bg-[#8E9AA0]", // Grey
  "in-progress": "bg-[#F59F0A]", // Yellow
  completed: "bg-[#1EA54E]", // Green
  partial: "bg-[#1D3557]", // Dark Blue
  full: "bg-[#0096FF]", // Blue
  delayed: "bg-[#DB1F26]", // Red
};

const perspectives: Perspective[] = [
  {
    name: "Strategy And Planning",
    percentage: "97.78%",
    criteria: [
      {
        name: "Digital Transformation",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
        ],
      },
      {
        name: "Digital Governance",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        name: "Enterprise Architecture",
        layout: 2, // 2x2 grid
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Organization And Culture",
    percentage: "70.83%",
    criteria: [
      {
        name: "Digital Culture And Environment",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "completed" },
        ],
      },
      {
        name: "Leadership Development",
        layout: 2,
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
        ],
      },
      {
        name: "Skills & Capacity Building",
        badges: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    name: "Operations And Execution",
    percentage: "%80.00",
    criteria: [
      {
        name: "Business Processes",
        layout: 2, // 2x2 grid
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Business Continuity",
    percentage: "90.59%",
    criteria: [
      {
        name: "Risk Management",
        layout: 2,
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" },
        ],
      },
      {
        name: "Business Continuity",
        layout: 2,
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "not-started" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" },
          { number: 6, status: "not-started" },
          { number: 7, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Information Technology",
    percentage: "75.00%",
    criteria: [
      {
        name: "Support Systems",
        badges: [
          { number: 1, status: "full" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" },
        ],
      },
      {
        name: "IT Infrastructure",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "full" },
          { number: 6, status: "completed" },
          { number: 7, status: "completed" },
        ],
      },
      {
        name: "Cloud Infrastructure",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "full" },
        ],
      },
    ],
  },
  {
    name: "Comprehensive Governance",
    percentage: "64.44%",
    criteria: [
      {
        name: "Governance Platforms",
        layout: 2,
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "not-started" },
          { number: 5, status: "completed" },
          { number: 6, status: "completed" },
          { number: 7, status: "completed" },
          { number: 8, status: "completed" },
          { number: 9, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Channels And Services",
    percentage: "100%",
    criteria: [
      {
        name: "Service Quality",
        layout: 2,
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
        ],
      },
      {
        name: "Digital Channels",
        layout: 2,
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Beneficiary Centralization",
    percentage: "60.00%",
    criteria: [
      {
        name: "User Engagement",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "in-progress" },
        ],
      },
      {
        name: "User Relationship",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        name: "User Experience",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "completed" },
          { number: 4, status: "in-progress" },
          { number: 5, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Government Data",
    percentage: "87.50%",
    criteria: [
      {
        name: "Data Governance",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        name: "Data Usage & Availability",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
        ],
      },
      {
        name: "Open Data",
        badges: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    name: "Research And Innovation",
    percentage: "17.65%",
    criteria: [
      {
        name: "Innovation",
        layout: 2,
        badges: [
          { number: 1, status: "delayed" },
          { number: 2, status: "delayed" },
          { number: 3, status: "delayed" },
          { number: 4, status: "delayed" },
        ],
      },
      {
        name: "Creative Solutions",
        layout: 2,
        badges: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "delayed" },
        ],
      },
    ],
  },
];

export const ProgressStatusMatrix: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-[#E0E8ED] shadow-sm">
      {/* Header */}
      <div className="px-6 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h3 className="font-semibold text-[#1D3557] text-lg">
            Progress Status
          </h3>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#8597A8]">
            {[
              { label: "Not Started", status: "not-started" },
              { label: "In Progress", status: "in-progress" },
              { label: "Completed", status: "completed" },
              { label: "Partially Uploaded", status: "partial" },
              { label: "Fully Uploaded", status: "full" },
              { label: "Delayed", status: "delayed" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    statusColors[item.status as MetricStatus]
                  }`}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Matrix */}
      <div className="overflow-x-auto custom-scrollbar">
        <div className="min-w-[1400px] px-6 py-6">
          <div className="grid grid-cols-10 gap-3">
            {perspectives.map((perspective, idx) => (
              <div key={idx} className="flex flex-col gap-3 h-full">
                {/* Column Header */}
                <div className="bg-[#1D3557] rounded-lg px-1 py-4 text-center h-[90px] flex flex-col justify-center shadow-sm shrink-0">
                  <div className="text-white text-[11px] font-semibold leading-tight line-clamp-3 px-1">
                    {perspective.name}
                  </div>
                  <div className="mt-2 text-white text-base font-bold">
                    {perspective.percentage}
                  </div>
                </div>

                {/* Criteria Cards */}
                {perspective.criteria.map((criterion, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="bg-white rounded-lg p-2 flex flex-col shadow-sm flex-1 h-full border border-gray-100/50" // Removed strong border, kept subtle trace or none if preferred
                  >
                    <div className="text-[10px] text-[#5A6B7C] text-center leading-snug mb-3 flex items-center justify-center min-h-[24px] font-medium shrink-0">
                      {criterion.name}
                    </div>

                    <div className="flex-1 flex items-center justify-center w-full">
                      <div className="flex flex-wrap justify-start gap-y-2 w-full content-center">
                        {criterion.badges.map((badge, bIdx) => (
                          <div
                            key={bIdx}
                            className={`${
                              criterion.layout === 2
                                ? "basis-[48%]"
                                : "basis-[32%]"
                            } flex justify-center`}
                          >
                            <span
                              className={`w-7 h-7 lg:w-9 lg:h-9 rounded-full ${
                                statusColors[badge.status]
                              } text-white flex items-center justify-center text-[10px] lg:text-xs font-bold shadow-sm transition-transform hover:scale-110 shrink-0`}
                            >
                              {badge.number}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
