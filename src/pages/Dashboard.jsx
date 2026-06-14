import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import WebcamPanel from "../components/WebcamPanel";
import CurrentQuestion from "../components/CurrentQuestion";

import PerformancePanel from "../components/PerformancePanel";
import MetricsGrid from "../components/MetricsGrid";

import EmotionAnalysis from "../components/EmotionAnalysis";
import EyeContactTimeline from "../components/EyeContactTimeline";
import SpeechAnalysis from "../components/SpeechAnalysis";

import TranscriptPanel from "../components/TranscriptPanel";
import AnswerEvaluation from "../components/AnswerEvaluation";

import AIFeedbackPanel from "../components/AIFeedbackPanel";
import SkillsRadar from "../components/SkillsRadar";

import RecruiterSummary from "../components/RecruiterSummary";
import DownloadReport from "../components/DownloadReport";

const Interview = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <TopBar />

        <WebcamPanel />

        <CurrentQuestion />

        <PerformancePanel />

                

        <MetricsGrid />
<div className="dashboard-row">
  <EyeContactTimeline />
  <SpeechAnalysis />
</div>

<div className="dashboard-row">
  <TranscriptPanel />
  <AnswerEvaluation />
</div>

<div className="dashboard-row">
  <AIFeedbackPanel />
  <SkillsRadar />
</div>

        <RecruiterSummary />

<DownloadReport />

      </div>

    </div>
  );
};

export default Interview;