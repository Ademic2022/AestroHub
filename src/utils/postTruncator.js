export const truncateContent = (content, len) => {
  const word = len ? len : 10;
  // Remove HTML tags from content
  const strippedContent = content.replace(/<[^>]+>/g, "");
  const words = strippedContent.split(" ");
  const truncatedContent =
    words.length > word
      ? `${words.slice(0, word).join(" ")}...`
      : strippedContent;
  return truncatedContent;
};
