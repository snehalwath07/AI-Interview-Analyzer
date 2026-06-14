export const saveInterview = (
  interview
) => {

  const interviews =
    JSON.parse(
      localStorage.getItem(
        "interviewHistory"
      )
    ) || [];

  interviews.unshift(interview);

  localStorage.setItem(
    "interviewHistory",
    JSON.stringify(interviews)
  );
};

export const getInterviewHistory =
  () => {

    return (
      JSON.parse(
        localStorage.getItem(
          "interviewHistory"
        )
      ) || []
    );
  };