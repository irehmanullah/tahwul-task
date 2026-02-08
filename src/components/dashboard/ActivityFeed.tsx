import { FileText, CheckCircle, BarChart } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "Ahmed Al-Ali",
    action: "uploaded document",
    target: "Project Plan v2",
    time: "2 hours ago",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    user: "Sarah Smith",
    action: "completed task",
    target: "Review Stakeholders",
    time: "4 hours ago",
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    user: "System",
    action: "generated report",
    target: "Weekly Progress",
    time: "Yesterday",
    icon: BarChart,
    color: "bg-purple-100 text-purple-600",
  },
];

export const ActivityFeed = () => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-figma-border shadow-sm h-full">
      <h3 className="font-semibold text-figma-textPrimary mb-6">
        Recent Activity
      </h3>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div
              className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.color}`}
            >
              <activity.icon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-figma-textPrimary">
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="font-medium text-brand-blue">
                  {activity.target}
                </span>
              </p>
              <p className="text-xs text-figma-textSecondary mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
        <button className="w-full text-center text-sm text-brand-muted hover:text-brand-blue py-2 mt-2 transition-colors">
          View All Activities
        </button>
      </div>
    </div>
  );
};
