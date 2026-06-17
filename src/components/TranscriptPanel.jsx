import useSpeechToText from "../hooks/useSpeechRecognition";
import { useInterview } from "../context/InterviewContext";
import { countFillers } from "../utils/fillerwords";
import { calculateWPM } from "../utils/speechRate";
import { useEffect } from "react";

const TranscriptPanel = () => {
const {
  interviewStarted,
  autoListen,
  setSpeechRate,
  setFillerCount,
  setTranscript,
} = useInterview();

  const {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechToText();

  const fillerCount = countFillers(
    transcript
  );

  const wpm = calculateWPM(
    transcript,
    60
  );

  useEffect(() => {
    setFillerCount(fillerCount);
    setSpeechRate(wpm);
  }, [
    fillerCount,
    wpm,
    setFillerCount,
    setSpeechRate,
  ]);
useEffect(() => {

  setTranscript(transcript);

}, [
  transcript,
  setTranscript,
]);
  useEffect(() => {

    if (autoListen) {
      startListening();
    } else {
      stopListening();
    }

  }, [autoListen]);

  

  return (
    <div className="card">

      <h3>Live Transcript</h3>

      <div className="transcript-box">

        {!interviewStarted
          ? "Click Start Interview first..."
          : transcript ||
            "Start speaking..."}

      </div>

      <div className="transcript-buttons">

        <button
          onClick={startListening}
          disabled={!interviewStarted}
        >
          🎤 Start
        </button>

        <button
          onClick={stopListening}
          disabled={!interviewStarted}
        >
          ⏹ Stop
        </button>

        <button
          onClick={resetTranscript}
        >
          🗑 Clear
        </button>

      </div>

      <p>
        Status:
        {listening
          ? " Listening..."
          : " Stopped"}
      </p>

      <p>
        Filler Words Detected:
        <strong>
          {" "}
          {fillerCount}
        </strong>
      </p>

      <p>
        Speech Rate:
        <strong>
          {" "}
          {wpm} WPM
        </strong>
      </p>

    </div>
  );
};

export default TranscriptPanel;