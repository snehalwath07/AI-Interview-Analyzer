import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "0", score: 70 },
  { time: "2", score: 78 },
  { time: "4", score: 82 },
  { time: "6", score: 75 },
  { time: "8", score: 88 },
  { time: "10", score: 85 },
];

const EyeContactTimeline = () => {
  return (
    <div className="card">
      <h3>Eye Contact Timeline</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EyeContactTimeline;