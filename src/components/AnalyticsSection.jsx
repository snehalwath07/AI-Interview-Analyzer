import EmotionChart from "./EmotionChart";
import EyeContactChart from "./EyeContactChart";
import SpeechChart from "./SpeechChart";

const AnalyticsSection = () => {
  return (
    <div className="analytics-grid">

      <div className="analytics-card">
        <h3>Current Question</h3>

        <div className="question-box">
          <h4>
            6. How do you handle pressure and tight deadlines?
          </h4>

          <div className="question-timer">
            ⏱ 01:15
          </div>
        </div>
      </div>

      <div className="analytics-card">
        <h3>Emotion Analysis</h3>
        <EmotionChart />
      </div>

      <div className="analytics-card">
        <h3>Eye Contact Over Time</h3>
        <EyeContactChart />
      </div>

      <div className="analytics-card">
        <h3>Speech Analysis</h3>
        <SpeechChart />
      </div>

    </div>
  );
};

export default AnalyticsSection;