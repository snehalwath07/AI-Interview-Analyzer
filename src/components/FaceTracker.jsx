import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { useInterview } from "../context/InterviewContext";

const FaceTracker = ({ videoRef }) => {
  const {
    setEyeContact,
    setEmotion,
  } = useInterview();
const previousScore = useRef(90);

  useEffect(() => {
    let modelsLoaded = false;

    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(
          "/models"
        );

        await faceapi.nets.faceLandmark68Net.loadFromUri(
          "/models"
        );

        await faceapi.nets.faceExpressionNet.loadFromUri(
          "/models"
        );

        modelsLoaded = true;

        console.log(
          "Face API Loaded"
        );
      } catch (err) {
        console.log(
          "Model Error:",
          err
        );
      }
    };

    loadModels();

    const interval = setInterval(
      async () => {
        try {
          if (
            !modelsLoaded ||
            !videoRef?.current ||
            videoRef.current
              .readyState !== 4
          ) {
            return;
          }

          const detection =
            await faceapi
              .detectSingleFace(
                videoRef.current,
                new faceapi.TinyFaceDetectorOptions(
                  {
                    inputSize: 416,
                    scoreThreshold: 0.3,
                  }
                )
              )
              .withFaceLandmarks()
              .withFaceExpressions();

          if (detection) {
            const canvas =
              document.getElementById(
                "face-canvas"
              );

            if (canvas) {
              const displaySize = {
                width:
                  videoRef.current
                    .videoWidth,
                height:
                  videoRef.current
                    .videoHeight,
              };

              faceapi.matchDimensions(
                canvas,
                displaySize
              );

              const resizedDetection =
                faceapi.resizeResults(
                  detection,
                  displaySize
                );

              const ctx =
                canvas.getContext(
                  "2d"
                );

              ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
              );

              const box =
                resizedDetection
                  .detection.box;

              ctx.strokeStyle =
                "yellow";

              ctx.lineWidth = 3;

              ctx.strokeRect(
                box.x,
                box.y,
                box.width,
                box.height
              );
            }

            const landmarks =
              detection.landmarks;

            const nose =
              landmarks.getNose()[3];
              const leftEye =
  landmarks.getLeftEye();

const rightEye =
  landmarks.getRightEye();

            const jaw =
              landmarks.getJawOutline();

            const leftFace =
              jaw[0];

            const rightFace =
              jaw[16];

            const faceCenter =
              (leftFace.x +
                rightFace.x) /
              2;

            const noseOffset =
              Math.abs(
                nose.x -
                  faceCenter
              );

              const leftEyeCenter =
  (leftEye[0].x +
    leftEye[3].x) / 2;

const rightEyeCenter =
  (rightEye[0].x +
    rightEye[3].x) / 2;

const eyeCenter =
  (leftEyeCenter +
    rightEyeCenter) / 2;

const eyeOffset =
  Math.abs(
    eyeCenter - faceCenter
  );

            const combinedOffset =
  (noseOffset + eyeOffset) / 2;

let eyeScore = 100;

if (combinedOffset > 35) {
  eyeScore = 30;
}
else if (combinedOffset > 25) {
  eyeScore = 55;
}
else if (combinedOffset > 15) {
  eyeScore = 75;
}
else if (combinedOffset > 8) {
  eyeScore = 90;
}

            const smoothScore =
  Math.round(
    previousScore.current * 0.7 +
    eyeScore * 0.3
  );

previousScore.current =
  smoothScore;

setEyeContact(
  smoothScore
);

            const expressions =
  detection.expressions;

let emotion = "Neutral";

if (expressions.happy > 0.6) {
  emotion = "Happy";
}
else if (expressions.fearful > 0.4) {
  emotion = "Nervous";
}
else if (expressions.sad > 0.4) {
  emotion = "Sad";
}
else {
  emotion = "Neutral";
}

setEmotion(emotion);

console.log(
  "Emotion:",
  emotion
);

            

            console.log(
              "Eye Contact:",
              eyeScore
            );

            console.log(
              "Face Detected"
            );
          } else {
            setEyeContact(20);

            setEmotion(
              "No Face"
            );

            console.log(
              "No Face"
            );
          }
        } catch (err) {
          console.log(
            "Detection Error:",
            err
          );
        }
      },
      1000
    );

    return () =>
      clearInterval(
        interval
      );
  }, [
    videoRef,
    setEyeContact,
    setEmotion,
  ]);

  return null;
};

export default FaceTracker;