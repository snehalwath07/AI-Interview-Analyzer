import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { t: 0, speech: 120 },
  { t: 2, speech: 145 },
  { t: 4, speech: 135 },
  { t: 6, speech: 160 },
  { t: 8, speech: 140 },
  { t: 10, speech: 150 },
];

const SpeechChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="t" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="speech"
          stroke="#8B5CF6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SpeechChart;