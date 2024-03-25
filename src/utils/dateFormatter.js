export const formatBlogDate = (dateString) => {
  const date = new Date(dateString);

  // Extract date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // Format time
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  // Construct formatted date string
  const formattedDate = `${day}/${month}/${year} (${hours}:${minutes})`;

  return formattedDate;
};
