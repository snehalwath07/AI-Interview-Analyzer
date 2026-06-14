import { useEffect } from "react";
import * as faceapi from "face-api.js";
import { useInterview } from "../context/InterviewContext";

const FaceTracker = ({ videoRef }) => {
  const { setEyeContact } = useInterview();

  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(
          "/models"
        );

        console.log("Face API Loaded");
      } catch (err) {
        console.log(err);
      }
    };

    loadModels();

    const interval = setInterval(async () => {
      if (
        videoRef?.current &&
        videoRef.current.readyState === 4
      ) {
        const detection =
          await faceapi.detectSingleFace(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          );

        if (detection) {
          setEyeContact(90);
          console.log("Face Detected");
        } else {
          setEyeContact(20);
          console.log("No Face");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [videoRef, setEyeContact]);

  return null;
};

export default FaceTracker;