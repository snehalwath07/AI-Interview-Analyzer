import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "Communication", score: 85 },
  { skill: "Confidence", score: 80 },
  { skill: "Technical", score: 75 },
  { skill: "Problem Solving", score: 90 },
  { skill: "Clarity", score: 82 },
];

const SkillsRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <Radar
          dataKey="score"
          stroke="#6D4AFF"
          fill="#6D4AFF"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillsRadarChart;