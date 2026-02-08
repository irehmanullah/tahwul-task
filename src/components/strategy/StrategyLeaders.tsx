import userDemo from "../../assets/user-demo.png";

const leaders = [
  { name: "Ahmed Al-Ali", role: "Strategy Perspective", avatar: userDemo },
  { name: "Ahmed Al-Ali", role: "Strategy Perspective", avatar: userDemo },
];

export const StrategyLeaders = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mt-6">
      <h3 className="text-lg font-bold text-[#1D3557] mb-6">Leaders</h3>
      <div className="flex flex-wrap gap-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-xl min-w-[280px]"
          >
            <img
              src={leader.avatar}
              alt={leader.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold text-[#1D3557]">{leader.name}</p>
              <p className="text-xs text-[#8597A8]">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
