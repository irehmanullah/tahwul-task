import React from "react";

interface Activity {
  content: React.ReactNode;
  time: string;
}

const activities: Activity[] = [
  {
    content: (
      <span>
        <span className="font-medium">Roadmap_Version1.Docx</span> Uploaded By
        Rami AlSharif
      </span>
    ),
    time: "5 Mins Ago",
  },
  {
    content: (
      <span>
        <span className="font-medium">KPI_Framework.Xlsx</span> Uploaded By Mona
        Hamed
      </span>
    ),
    time: "20 Mins Ago",
  },
  {
    content: (
      <span>
        <span className="font-medium">Digital_Transformation_Plan.Pdf</span>{" "}
        Approved By Advisory Team
      </span>
    ),
    time: "1 Hour Ago",
  },
];

export const RecentActivitiesCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full flex flex-col">
      <h3 className="font-bold text-[#1D3557] border-b border-gray-100 pb-4 mb-4">
        Recent Activities
      </h3>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <ul className="divide-y divide-gray-100 space-y-0">
          {activities.map((activity, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
            >
              {/* Red Dot */}
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]"></div>
              </div>

              {/* Content and Time */}
              <div className="flex-1 flex justify-between gap-4">
                <p className="text-sm text-[#1D3557] leading-relaxed">
                  {activity.content}
                </p>
                <span className="text-xs text-[#94A3B8] whitespace-nowrap mt-0.5">
                  {activity.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
