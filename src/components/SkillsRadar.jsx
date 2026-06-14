import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Communication",
    score: 90,
  },
  {
    subject: "Confidence",
    score: 85,
  },
  {
    subject: "Technical",
    score: 80,
  },
  {
    subject: "Problem Solving",
    score: 88,
  },
  {
    subject: "Clarity",
    score: 84,
  },
];

const SkillsRadar = () => {
  return (
    <div className="card">
      <h3>Skills Radar</h3>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />

          <PolarAngleAxis dataKey="subject" />

          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
          />

          <Radar
            dataKey="score"
            stroke="#6d4aff"
            fill="#6d4aff"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;