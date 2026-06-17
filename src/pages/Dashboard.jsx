import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import WebcamPanel from "../components/WebcamPanel";
import CurrentQuestion from "../components/CurrentQuestion";

import PerformancePanel from "../components/PerformancePanel";
import MetricsGrid from "../components/MetricsGrid";

import TranscriptPanel from "../components/TranscriptPanel";
import AnswerEvaluation from "../components/AnswerEvaluation";

import DownloadReport from "../components/DownloadReport";

const Interview = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <TopBar />

        <div className="interview-top-row">

  <WebcamPanel />

  <div className="question-section">

    <CurrentQuestion />

    <TranscriptPanel />

  </div>

</div>

        <PerformancePanel />

        <div className="metrics-evaluation-row">

  <MetricsGrid />

  <AnswerEvaluation />

</div>

        

        <DownloadReport />

      </div>

    </div>
  );
};

export default Interview;