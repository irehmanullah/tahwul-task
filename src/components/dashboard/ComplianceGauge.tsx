import React from "react";
import Plot from "react-plotly.js";

interface ComplianceGaugeProps {
  percentage?: number;
  title?: string;
  subtitle?: string;
}

export const ComplianceGauge: React.FC<ComplianceGaugeProps> = ({
  percentage = 65,
  title = "Overall Compliance Score",
  subtitle = "Basic Standards 2025",
}) => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-figma-border shadow-sm h-full flex flex-col">
      <h3 className="font-semibold text-figma-textPrimary mb-6">{title}</h3>

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
                  color: "#DB1F26",
                  thickness: 1,
                  line: {
                    color: "#DB1F26",
                    width: 0,
                  },
                },
                bgcolor: "#F5F6F7",
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
                text: subtitle,
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
    </div>
  );
};
