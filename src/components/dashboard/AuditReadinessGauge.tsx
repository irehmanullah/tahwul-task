import React from "react";
import Plot from "react-plotly.js";

interface AuditReadinessGaugeProps {
  percentage?: number;
}

export const AuditReadinessGauge: React.FC<AuditReadinessGaugeProps> = ({
  percentage = 80,
}) => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-figma-border shadow-sm h-full flex flex-col">
      <h3 className="font-semibold text-figma-textPrimary mb-6">
        Audit Readiness
      </h3>

      <div className="flex-1 flex items-center justify-center">
        <Plot
          data={[
            {
              type: "indicator",
              mode: "gauge+number",
              value: percentage,
              number: {
                suffix: "%",
                font: {
                  size: 48,
                  color: "#1D3557",
                  family: "Inter, sans-serif",
                },
              },
              gauge: {
                axis: {
                  range: [0, 100],
                  tickwidth: 0,
                  tickcolor: "transparent",
                  tickfont: { size: 0 },
                },
                bar: {
                  color: "#1EA54E",
                  thickness: 1,
                  line: {
                    color: "#1EA54E",
                    width: 0,
                  },
                },
                bgcolor: "#E0E8ED",
                borderwidth: 0,
                bordercolor: "transparent",
                shape: "angular",
                threshold: {
                  line: { color: "transparent", width: 0 },
                  thickness: 0,
                  value: 100,
                },
              },
            },
          ]}
          layout={{
            width: 280,
            height: 220,
            margin: { t: 0, r: 0, l: 0, b: 0 },
            paper_bgcolor: "transparent",
            font: { family: "Inter, sans-serif" },
            annotations: [
              {
                text: "Readiness Level",
                x: 0.5,
                y: 0.15,
                xref: "paper",
                yref: "paper",
                showarrow: false,
                font: { size: 14, color: "#8597A8" },
              },
            ],
          }}
          config={{
            displayModeBar: false,
            responsive: true,
          }}
        />
      </div>

      {/* Separator */}
      <div className="border-t border-figma-border my-4"></div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-figma-textPrimary mb-1">
            12
          </div>
          <div className="text-sm text-figma-textSecondary">Overdue Stds</div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-figma-textPrimary mb-1">
            5
          </div>
          <div className="text-sm text-figma-textSecondary">
            Missing Evidence
          </div>
        </div>
      </div>
    </div>
  );
};
