const sections = [
  {
    title: "Objective",
    content:
      "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
  },
  {
    title: "Implementation Requirements",
    content: (
      <div className="space-y-3 text-sm text-[#64748B]">
        <p>
          Prepare A Digital Transformation Strategy For The Transition To
          Electronic Government Transactions, Including The Following:
        </p>
        <div className="space-y-2 pl-2">
          <p>
            A. The Organization's Vision, Mission, Strategic Pillars, And
            Strategic Objectives, And Their Alignment With The Organization's
            Overall Strategy.
          </p>
          <p>B. Strategic Initiatives, Programs, And Performance Indicators.</p>
          <p>
            C. A Clear Methodology For Integration And Coordination With
            Relevant External Entities To Achieve The Strategy's Objectives.
          </p>
          <p>
            D. Required Competencies, Capabilities, And Skills Necessary To
            Achieve The Strategy's Objectives.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Evidence Documents",
    content:
      "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
  },
  {
    title: "Related Regulations",
    content:
      "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
  },
  {
    title: "Scope",
    content: "All Government Entities.",
  },
];

export const StrategyContent = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[240px] shrink-0 bg-[#F8FAFC] p-6 rounded-xl flex items-center border border-gray-100">
              <h3 className="font-semibold text-[#1D3557] text-sm">
                {section.title}
              </h3>
            </div>
            <div className="flex-1 bg-[#F8FAFC] p-6 rounded-xl text-sm text-[#64748B] leading-relaxed border border-gray-100 flex items-center">
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
