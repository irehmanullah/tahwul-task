import { StatCard } from "../components/dashboard/StatCard";
import { ProjectTimeline } from "../components/dashboard/ProjectTimeline";
import { ProgressStatusMatrix } from "../components/dashboard/ProgressStatusMatrix";
import { ComplianceGauge } from "../components/dashboard/ComplianceGauge";
import { TopPerformers } from "../components/dashboard/TopPerformers";
import { RecentActivitiesCard } from "../components/dashboard/RecentActivitiesCard";
import { PerformanceBarChart } from "../components/dashboard/PerformanceBarChart";
import { AuditReadinessGauge } from "../components/dashboard/AuditReadinessGauge";

// Import SVG icons
import overallProgressIcon from "../assets/overall-progress.svg";
import totalCriteriaIcon from "../assets/total-criteria.svg";
import completedCriteriaIcon from "../assets/completed-criteria.svg";
import evidenceDocumentsIcon from "../assets/evidence-documents.svg";
import evidenceCompletedIcon from "../assets/evidence-completed.svg";
import uploadedDocumentsIcon from "../assets/uploaded-documents.svg";

export const DashboardPage = () => {
  return (
    <div className="space-y-6 mx-auto animate-in fade-in duration-500">
      {/* Project Timeline - Full Width */}
      <ProjectTimeline />

      {/* Top Stats Row - 6 Cards - Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 w-full">
        <StatCard
          label="Overall Progress"
          value="78.65%"
          icon={overallProgressIcon}
        />
        <StatCard label="Total Criteria" value="95" icon={totalCriteriaIcon} />
        <StatCard
          label="Completed Criteria"
          value="52"
          icon={completedCriteriaIcon}
        />
        <StatCard
          label="Evidence Documents"
          value="386"
          icon={evidenceDocumentsIcon}
        />
        <StatCard
          label="Evidence (Completed)"
          value="302"
          icon={evidenceCompletedIcon}
        />
        <StatCard
          label="Uploaded to DGA"
          value="258"
          icon={uploadedDocumentsIcon}
        />
      </div>

      {/* Progress Status Matrix - Full Width */}
      <ProgressStatusMatrix />

      {/* Bottom Row - 3 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComplianceGauge />
        <TopPerformers />
        <RecentActivitiesCard />
      </div>

      {/* Charts Row - 2 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <PerformanceBarChart />
        <AuditReadinessGauge />
      </div>
    </div>
  );
};
