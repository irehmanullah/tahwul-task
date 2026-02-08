import totalEvidenceIcon from "../../assets/total-evidence.svg";
import underReviewEvidenceIcon from "../../assets/under-review-evidence.svg";
import inProgressEvidenceIcon from "../../assets/inprogress-evidence.svg";
import completedEvidenceIcon from "../../assets/completed-evidence.svg";

const stats = [
  {
    label: "Total Evidence",
    value: 4,
    icon: totalEvidenceIcon,
  },
  {
    label: "Under Review Evidence",
    value: 3,
    icon: underReviewEvidenceIcon,
  },
  {
    label: "In Progress Evidence",
    value: 2,
    icon: inProgressEvidenceIcon,
  },
  {
    label: "Completed Evidence",
    value: 1,
    icon: completedEvidenceIcon,
  },
];

export const EvidenceStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4"
        >
          <div className="shrink-0">
            <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#1D3557] mb-1">
              {stat.value}
            </h4>
            <p className="text-sm text-[#8597A8] font-normal">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
