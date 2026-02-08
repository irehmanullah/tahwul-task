import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const StrategyHeader = () => {
  return (
    <div className="mb-6">
      {/* Top Navigation - Outside Card */}
      <div className="flex items-center gap-2 mb-6">
        <Link
          to="/"
          className="text-gray-400 hover:text-brand-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-lg font-bold text-[#1D3557]">
          Digital Transformation Strategic Planning
        </h2>
      </div>

      {/* Main Card */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs rounded-full mb-4">
            Strategy & Planning
          </span>

          <h1 className="text-xl font-bold text-[#1D3557] mb-2">
            Digital Transformation Strategic Planning
          </h1>
          <p className="text-gray-400 text-sm">
            Develop Comprehensive Strategic Plans For Digital Transformation
            Aligned With Organizational Goals
          </p>
        </div>

        {/* Progress Circle */}
        <div className="relative w-24 h-24 shrink-0">
          <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="2.5"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray="100, 100"
              className="animate-[progress_1s_ease-out_forwards]"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-sm font-bold text-[#1D3557]">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
