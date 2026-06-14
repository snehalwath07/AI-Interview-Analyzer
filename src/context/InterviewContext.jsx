import {
  createContext,
  useContext,
  useState,
} from "react";

const InterviewContext = createContext();

export const InterviewProvider = ({
  children,
}) => {

  const [transcript, setTranscript] =
    useState("");

  const questions = [

    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths and weaknesses?",
    "Describe a challenging situation you faced and how you handled it.",
    "Tell me about a time you worked in a team. What was your role?",
    "Where do you see yourself in 5 years?",
    "Why do you want to join our company?",
    "Tell me about a failure and what you learned from it.",
    "How do you handle pressure or deadlines?",
    "If you disagree with your manager, what will you do?",
    "What motivates you to work?",
    "Do you have any questions for us?",

    "You have no prior experience, but you are assigned an important task. How will you handle it?",
    "You don't understand a task given by your manager. What will you do?",
    "You made a mistake in your academic project or assignment. How did you handle it?",
    "Your teammate is not contributing in a college project. What will you do?",
    "You have multiple assignments with the same deadline. How will you manage your time?",
    "You receive negative feedback from your professor or mentor. How do you respond?",
    "You are asked a question in an interview that you don't know the answer to. What will you do?",
    "You are working in a team where members have different opinions. How will you handle conflicts?",
    "You are under pressure before an exam or presentation. How do you manage stress?",
    "You took initiative in college for something. What challenges did you face and how did you solve them?",
    "You failed or performed poorly in something important. What did you learn from it?",
    "You are selected for a role that requires skills you are still learning. How will you cope?"
  ];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [eyeContact, setEyeContact] =
    useState(85);

  const [emotion, setEmotion] =
    useState("Neutral");

  const [confidenceScore,
    setConfidenceScore] =
    useState(82);

  const [speechRate,
    setSpeechRate] =
    useState(80);

  const [fillerCount,
    setFillerCount] =
    useState(0);

  const [answerScore,
    setAnswerScore] =
    useState(85);

    const [interviewStarted,
  setInterviewStarted] =
  useState(false);

  return (
    <InterviewContext.Provider
      value={{
        transcript,
        setTranscript,

        questions,

        currentQuestion,
        setCurrentQuestion,

        eyeContact,
        setEyeContact,

        emotion,
        setEmotion,

        confidenceScore,
        setConfidenceScore,

        speechRate,
        setSpeechRate,

        fillerCount,
        setFillerCount,

        answerScore,
        setAnswerScore,

        interviewStarted,
        setInterviewStarted,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterview = () => {
  return useContext(InterviewContext);
};