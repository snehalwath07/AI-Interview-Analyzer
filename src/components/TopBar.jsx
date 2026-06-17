import { useEffect, useState } from "react";
import { useInterview } from "../context/InterviewContext";
import { saveInterview } from "../utils/storage";

const TopBar = () => {
  const [seconds, setSeconds] = useState(0);

  const {
    interviewStarted,
    setInterviewStarted,

    autoListen,
    setAutoListen,

    eyeContact,
    speechRate,
    fillerCount,

    confidenceScore,
    emotion,
    transcript,
  } = useInterview();

  useEffect(() => {
    let timer;

    if (interviewStarted) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [interviewStarted]);

  const formatTime = () => {
    const hrs = String(
      Math.floor(seconds / 3600)
    ).padStart(2, "0");

    const mins = String(
      Math.floor((seconds % 3600) / 60)
    ).padStart(2, "0");

    const secs = String(
      seconds % 60
    ).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  const startInterview = () => {
    setSeconds(0);

    setInterviewStarted(true);

    setAutoListen(true);
  };

  const endInterview = () => {

    const fillerScore = Math.max(
      0,
      100 - fillerCount * 5
    );

    const overallScore = Math.round(
      eyeContact * 0.45 +
      speechRate * 0.25 +
      fillerScore * 0.30
    );

    saveInterview({
      date: new Date().toLocaleString(),

      score: overallScore,

      eyeContact,

      confidenceScore,

      speechRate,

      fillerCount,

      emotion,

      transcript,
    });

    alert("Interview Saved!");

    setInterviewStarted(false);

    setAutoListen(false);
  };

  return (
    <div className="topbar">

      <div>

        <h1>Live Interview Session</h1>

        <div className="recording-status">

          <span className="record-dot"></span>

          {interviewStarted
            ? "Interview Running"
            : "Waiting To Start"}

          <span className="timer">
            ⏰ {formatTime()}
          </span>

        </div>

      </div>

      <div className="topbar-buttons">

        {!interviewStarted ? (

  <button
    className="pause-btn"
    onClick={startInterview}
  >
    🔄 Start New Interview
  </button>

) : (

  <button
    className="end-btn"
    onClick={endInterview}
  >
    ■ End Interview
  </button>

)}

      </div>

    </div>
  );
};

export default TopBar;