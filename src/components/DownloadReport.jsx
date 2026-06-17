import jsPDF from "jspdf";
import { useInterview } from "../context/InterviewContext";

const DownloadReport = () => {

  const {
    eyeContact,
    confidenceScore,
    speechRate,
    fillerCount,
    emotion,
    transcript,
  } = useInterview();

  const generatePDF = () => {

    const fillerScore = Math.max(
      0,
      100 - fillerCount * 5
    );

    const overallScore = Math.round(
      eyeContact * 0.45 +
      speechRate * 0.25 +
      fillerScore * 0.30
    );

    const doc = new jsPDF();

    let y = 20;

    // Title
    doc.setFontSize(22);
    doc.text(
      "AI Interview Analysis Report",
      20,
      y
    );

    y += 15;

    // Line
    doc.line(20, y, 190, y);

    y += 15;

    // Overall Score
    doc.setFontSize(16);
    doc.text(
      `Overall Score: ${overallScore}/100`,
      20,
      y
    );

    y += 15;

    // Metrics Section
    doc.setFontSize(14);
    doc.text(
      "Performance Metrics",
      20,
      y
    );

    y += 10;

    doc.setFontSize(12);

    doc.text(
      `Eye Contact: ${eyeContact}%`,
      25,
      y
    );

    y += 10;

    doc.text(
      `Confidence: ${confidenceScore}%`,
      25,
      y
    );

    y += 10;

    doc.text(
      `Speech Rate: ${speechRate} WPM`,
      25,
      y
    );

    y += 10;

    doc.text(
      `Filler Words: ${fillerCount}`,
      25,
      y
    );

    y += 10;

    doc.text(
      `Emotion: ${emotion}`,
      25,
      y
    );

    y += 20;

    // Transcript
    doc.setFontSize(14);
    doc.text(
      "Interview Transcript",
      20,
      y
    );

    y += 10;

    doc.setFontSize(11);

    const transcriptText =
      transcript?.trim()
        ? transcript
        : "No transcript available.";

    const splitText =
      doc.splitTextToSize(
        transcriptText,
        160
      );

    doc.text(
      splitText,
      20,
      y
    );

    y += splitText.length * 6 + 15;

    // Footer
    doc.setFontSize(10);

    doc.text(
      `Generated on: ${new Date().toLocaleString()}`,
      20,
      y
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