import { useEffect, useRef } from "react";
import { Maximize, Camera, Mic } from "lucide-react";
import FaceTracker from "./FaceTracker";
import { useInterview } from "../context/InterviewContext";

const WebcamPanel = () => {
  const videoRef = useRef(null);

  const {
    eyeContact,
    emotion,
    confidenceScore,
  } = useInterview();
console.log("Eye Contact =", eyeContact);
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream =
          await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      } catch (err) {
        console.log(err);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="webcam-panel">

      <div className="live-badge">
        📹 LIVE
      </div>

      <button className="fullscreen-btn">
        <Maximize size={18} />
      </button>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="webcam-video"
      />

      <div className="face-box"></div>

      <FaceTracker videoRef={videoRef} />

      <div className="ai-overlay">
        <div>👀 Eye Contact: {eyeContact}%</div>
        <div>😊 Emotion: {emotion}</div>
        <div>🎯 Confidence: {confidenceScore}%</div>
      </div>

      <div className="webcam-footer">

        <div className="status-item">
          <Camera size={18} />
          Camera
          <span className="green-dot"></span>
        </div>

        <div className="status-item">
          <Mic size={18} />
          Microphone
          <span className="green-dot"></span>
        </div>

        <div className="status-item">
          🔴 Recording
        </div>

      </div>

    </div>
  );
};

export default WebcamPanel;