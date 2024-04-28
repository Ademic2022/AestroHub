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

export const truncatePostCardContent = (title, content, len) => {
  const word = len ? len : 10;
  const totalCounts = 28;
  const strippedtitle = title.replace(/<[^>]+>/g, "");
  const strippedContent = content.replace(/<[^>]+>/g, "");
  const contentCounts = strippedContent.split(" ");
  const titleCounts = strippedtitle.split(" ");
  if (titleCounts.length < len) {
    const remainingCount = totalCounts - titleCounts.length;
    const truncatedContent = `${contentCounts.slice(0, remainingCount).join(" ")}...`
    return {truncatedTitle:strippedtitle, truncatedContent:truncatedContent}
  }
  else {
    const remainingCount = totalCounts - titleCounts.length;
    const truncatedTitle = `${titleCounts.slice(0, word).join(" ")}...`
    const truncatedContent = `${contentCounts.slice(0, remainingCount).join(" ")}...`
    return { truncatedTitle, truncatedContent };
  }
};
