import { Send } from "lucide-react";

const comments = [
  {
    author: "Sara Ibrahim",
    date: "2025-08-05",
    text: "Ensure The Plan Includes A Clear Governance Model.",
    initials: "S",
  },
  {
    author: "Mona Hamed",
    date: "2025-08-05",
    text: "Ensure The Plan Includes A Clear Governance Model.",
    initials: "M",
  },
];

export const RecentComments = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full flex flex-col">
      <h3 className="font-bold text-[#1D3557] mb-6">Comments</h3>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4 mb-6">
        {comments.map((comment, idx) => (
          <div key={idx} className="border border-gray-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] font-bold text-xs shrink-0">
                  {comment.initials}
                </div>
                <span className="font-bold text-[#1D3557] text-sm">
                  {comment.author}
                </span>
              </div>
              <span className="text-xs text-[#94A3B8]">{comment.date}</span>
            </div>
            <p className="text-sm text-[#1D3557] leading-relaxed">
              {comment.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <textarea
          className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#1D3557]/10 focus:border-[#1D3557] min-h-[120px] resize-none outline-none placeholder:text-gray-400 mb-4"
          placeholder="Type a comment..."
        ></textarea>
        <button className="flex items-center gap-2 bg-[#1D3557] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1D3557]/90 transition-colors">
          <Send className="w-4 h-4" />
          Post Comment
        </button>
      </div>
    </div>
  );
};
