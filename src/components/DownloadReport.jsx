import jsPDF from "jspdf";
import { useInterview } from "../context/InterviewContext";

const DownloadReport = () => {
  const {
    speechRate,
    fillerCount,
    answerScore,
    eyeContact,
  } = useInterview();

  const generatePDF = () => {

    const overallScore = Math.round(
      eyeContact * 0.30 +
      speechRate * 0.20 +
      Math.max(
        0,
        100 - fillerCount * 5
      ) * 0.20 +
      answerScore * 0.30
    );

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(
      "AI Interview Report",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Overall Score: ${overallScore}/100`,
      20,
      40
    );

    doc.text(
      `Eye Contact: ${eyeContact}%`,
      20,
      55
    );

    doc.text(
      `Speech Rate: ${speechRate} WPM`,
      20,
      70
    );

    doc.text(
      `Filler Words: ${fillerCount}`,
      20,
      85
    );

    doc.text(
      `Answer Score: ${answerScore}%`,
      20,
      100
    );

    doc.save(
      "AI_Interview_Report.pdf"
    );
  };

  return (
    <button
      onClick={generatePDF}
      className="download-btn"
    >
      📄 Download Report
    </button>
  );
};

export default DownloadReport;