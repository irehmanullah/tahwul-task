import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Completed", value: 65, color: "#10B981" },
  { name: "In Progress", value: 25, color: "#3B82F6" },
  { name: "Pending", value: 10, color: "#E2E8F0" },
];

export const ProgressChart = () => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-figma-border shadow-sm h-full flex flex-col">
      <h3 className="font-semibold text-figma-textPrimary mb-4">
        Overall Progress
      </h3>
      <div className="flex-1 min-h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <span className="block text-3xl font-bold text-figma-textPrimary">
            65%
          </span>
          <span className="text-xs text-figma-textSecondary font-medium uppercase tracking-wide">
            Completed
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-xs text-figma-textSecondary">
              {item.name}
            </span>
            <span className="text-sm font-bold text-figma-textPrimary">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
