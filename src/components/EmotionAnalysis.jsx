import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Neutral", value: 62 },
  { name: "Happy", value: 20 },
  { name: "Confident", value: 10 },
  { name: "Nervous", value: 8 },
];

const COLORS = [
  "#4F46E5",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

const EmotionAnalysis = () => {
  return (
    <div className="card emotion-analysis">
      <h3>Emotion Analysis</h3>

      <div className="emotion-content">

        <div className="chart-box">
          <ResponsiveContainer
            width="100%"
            height={220}
          >
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="emotion-legend">
          {data.map((item, index) => (
            <div
              key={index}
              className="legend-item"
            >
              <span
                className="legend-color"
                style={{
                  background:
                    COLORS[index],
                }}
              ></span>

              <span>{item.name}</span>

              <strong>
                {item.value}%
              </strong>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EmotionAnalysis;