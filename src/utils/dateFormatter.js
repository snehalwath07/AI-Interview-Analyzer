export const formatDate = (
  date = new Date()
) => {
  return date.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
};

export const formatTime = (
  date = new Date()
) => {
  return date.toLocaleTimeString(
    "en-IN"
  );
};