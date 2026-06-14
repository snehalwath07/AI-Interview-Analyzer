import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "0", eye: 65 },
  { time: "2", eye: 75 },
  { time: "4", eye: 70 },
  { time: "6", eye: 85 },
  { time: "8", eye: 78 },
  { time: "10", eye: 82 },
];

const EyeContactChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="eye"
          stroke="#22C55E"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EyeContactChart;