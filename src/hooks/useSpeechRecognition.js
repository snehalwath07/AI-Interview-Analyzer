import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const useSpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
  SpeechRecognition.startListening({
  continuous: true,
  interimResults: true,
  language: "en-US",
});
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  };
};

export default useSpeechToText;