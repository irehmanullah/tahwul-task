import { useState } from "react";
import { StrategyHeader } from "../components/strategy/StrategyHeader";
import { EvidenceStats } from "../components/strategy/EvidenceStats";
import { StrategyContent } from "../components/strategy/StrategyContent";
import { StrategyLeaders } from "../components/strategy/StrategyLeaders";
import { EvidenceTable } from "../components/evidence/EvidenceTable";
import { RecentComments } from "../components/evidence/RecentComments";
import { RecentActivitiesCard } from "../components/dashboard/RecentActivitiesCard";
import { cn } from "../lib/utils";

export const StrategyPage = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "evidence">(
    "overview",
  );

  return (
    <div className="max-w-[1440px] mx-auto animate-in fade-in duration-500 pb-12">
      <StrategyHeader />
      <EvidenceStats />

      {/* Tabs */}
      <div className="bg-[#F8FAFC] p-1.5 rounded-lg inline-flex mb-6 border border-gray-100">
        <button
          onClick={() => setActiveTab("overview")}
          className={cn(
            "px-6 py-2 text-sm font-medium rounded-md transition-all",
            activeTab === "overview"
              ? "bg-white text-[#1D3557] shadow-sm"
              : "text-[#64748B] hover:text-[#1D3557]",
          )}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("evidence")}
          className={cn(
            "px-6 py-2 text-sm font-medium rounded-md transition-all",
            activeTab === "evidence"
              ? "bg-white text-[#1D3557] shadow-sm"
              : "text-[#64748B] hover:text-[#1D3557]",
          )}
        >
          Evidence
        </button>
      </div>

      {/* Content Switcher */}
      {activeTab === "overview" ? (
        <div className="animate-in slide-in-from-bottom-2 duration-300">
          <StrategyContent />
          <StrategyLeaders />
        </div>
      ) : (
        <div className="animate-in slide-in-from-bottom-2 duration-300 space-y-6">
          <EvidenceTable />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
            <div className="lg:col-span-2 h-full">
              <RecentComments />
            </div>
            <div className="h-full">
              <RecentActivitiesCard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
