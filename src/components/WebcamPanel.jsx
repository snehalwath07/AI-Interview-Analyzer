import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Maximize,
  Camera,
  Mic,
} from "lucide-react";

import FaceTracker from "./FaceTracker";
import { useInterview } from "../context/InterviewContext";

const WebcamPanel = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraActive, setCameraActive] =
    useState(false);

  const [micActive, setMicActive] =
    useState(false);

 const {
  eyeContact,
  emotion,
  confidenceScore,
  interviewStarted,
} = useInterview();

  const toggleCamera = () => {
    const track =
      streamRef.current?.getVideoTracks()[0];

    if (!track) return;
console.log("Camera Before:", track.enabled);

track.enabled = !track.enabled;

console.log("Camera After:", track.enabled);

setCameraActive(track.enabled);
  };

  const toggleMic = () => {
    const track =
      streamRef.current?.getAudioTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;

    setMicActive(track.enabled);
  };

  useEffect(() => {
    console.log(
      "Eye Contact =",
      eyeContact
    );
  }, [eyeContact]);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream =
          await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });

        streamRef.current = stream;

        setCameraActive(true);

        setMicActive(
          stream.getAudioTracks().length > 0
        );

        if (videoRef.current) {
          videoRef.current.srcObject =
            stream;

          videoRef.current.onloadedmetadata =
            () => {
              videoRef.current.play();
            };
        }
      } catch (err) {
        console.log(
          "Camera Error:",
          err
        );

        setCameraActive(false);
        setMicActive(false);
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

      <div className="video-container">

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="webcam-video"
        />

        <canvas
          id="face-canvas"
          className="face-canvas"
        />

      </div>

      <FaceTracker
        videoRef={videoRef}
      />

      <div className="ai-overlay">

        <div>
          👀 Eye Contact: {eyeContact}%
        </div>

        <div>
          😊 Emotion: {emotion}
        </div>

        <div>
          🎯 Confidence: {confidenceScore}%
        </div>

      </div>

      

      <div className="webcam-footer">
<button
  className="device-btn"
  onClick={toggleCamera}
>
  {cameraActive
    ? "📷 Camera ON"
    : "📷 Camera OFF"}
</button>

<button
  className="device-btn"
  onClick={toggleMic}
>
  {micActive
    ? "🎤 Mic ON"
    : "🎤 Mic OFF"}
</button>
        <div className="status-item">
          <Camera size={18} />
          Camera
          <span
            className={
              cameraActive
                ? "green-dot"
                : "red-dot"
            }
          ></span>
        </div>

        <div className="status-item">
          <Mic size={18} />
          Microphone
          <span
            className={
              micActive
                ? "green-dot"
                : "red-dot"
            }
          ></span>
        </div>

       <div className="status-item">

  {interviewStarted
    ? "🟢 Recording"
    : "🔴 Not Recording"}

</div>

      </div>

    </div>
  );
};

export default WebcamPanel;