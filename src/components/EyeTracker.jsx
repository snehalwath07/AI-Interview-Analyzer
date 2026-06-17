import { useEffect } from "react";
import * as mpFaceMesh from "@mediapipe/face_mesh";

const EyeTracker = ({ videoRef }) => {
  useEffect(() => {
    if (!videoRef?.current) return;

    const faceMesh = new mpFaceMesh.FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    console.log("MediaPipe Loaded");

    return () => {
      faceMesh.close();
    };
  }, [videoRef]);

  return null;
};

export default EyeTracker;