import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", wpm: 120 },
  { time: "02:00", wpm: 140 },
  { time: "04:00", wpm: 135 },
  { time: "06:00", wpm: 155 },
  { time: "08:00", wpm: 145 },
  { time: "10:00", wpm: 142 },
];

const SpeechAnalysis = () => {
  return (
    <div className="card">
      <h3>Speech Analysis</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="wpm"
            stroke="#6d4aff"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpeechAnalysis;