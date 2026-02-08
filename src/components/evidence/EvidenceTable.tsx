import { ArrowUpDown } from "lucide-react";
import { cn } from "../../lib/utils";

const documents = [
  {
    number: "5.4.1.1",
    name: "Digital_Transformation_Plan.Pdf",
    lead: "Ahmed Khaled",
    preparer: "Ahmed Khaled",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Approved",
  },
  {
    number: "5.4.1.2",
    name: "KPI_Framework.Xlsx",
    lead: "Mona Hamed",
    preparer: "Mona Hamed",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Pending Review",
  },
  {
    number: "5.4.1.3",
    name: "Roadmap_Version1.Docx",
    lead: "Rami AlSharif",
    preparer: "Rami AlSharif",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Pending Review",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const isApproved = status === "Approved";
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-medium inline-block",
        isApproved
          ? "bg-[#DCFCE7] text-[#166534]"
          : "bg-[#FEF9C3] text-[#A16207]",
      )}
    >
      {status}
    </span>
  );
};

export const EvidenceTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#F8FAFC] text-[#64748B] font-medium">
            <tr>
              <th className="px-6 py-4 whitespace-nowrap first:rounded-l-lg last:rounded-r-lg">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Document Number{" "}
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Document Name{" "}
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Document Lead{" "}
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Document Preparer{" "}
                  <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Date <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Due Date <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap first:rounded-l-lg last:rounded-r-lg">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
                  Status <ArrowUpDown className="w-3 h-3 text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {documents.map((doc) => (
              <tr
                key={doc.number}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-[#1D3557]">
                  {doc.number}
                </td>
                <td className="px-6 py-4 text-[#1D3557]">{doc.name}</td>
                <td className="px-6 py-4 text-[#64748B]">{doc.lead}</td>
                <td className="px-6 py-4 text-[#64748B]">{doc.preparer}</td>
                <td className="px-6 py-4 text-[#64748B]">{doc.date}</td>
                <td className="px-6 py-4 text-[#64748B]">{doc.dueDate}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={doc.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
